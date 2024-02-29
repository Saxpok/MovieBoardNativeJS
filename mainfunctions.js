const leftscroll = document.getElementById('leftscroll')
const rightscroll = document.getElementById('rightscroll')

const leftindex = document.getElementById('left')
const rightindex = document.getElementById('right')

const settingsDetails = document.createElement('div')
settingsDetails.setAttribute('class', 'settings-button-details')

const typeArr = ['Animation', 'Documentary', 'Reality', 'Scripted']
const langArr = ['English', 'Korean', 'Chinese', 'German', 'French']

let from = 0
let to = 6
const leap = 6

const defaultType = 'Type...'
const defaultLang = 'Lang...'

let slidesNames = []

function processElements (arr) {
    arr.forEach((element, i, arr) => {
        if (from <= i &&  i < to)
    makeSlides(element)
    })
    
}

function makeSlides (element) {
    const slide = document.createElement('div')
    slide.setAttribute('class', 'slide')
    slide.setAttribute('type', element.show.type)
    slide.setAttribute('name', element.show.name)
    slide.setAttribute('lang', element.show.language)
    slide.setAttribute('age', element.show.premiered)
    element.show.image.medium  ? slide.style.backgroundImage = `url(${element.show.image.medium})` : slide.style.backgroundImage = `url(${element.show.image.original})`
    slide.style.backgroundRepeat = 'no-repeat'
    slide.style.backgroundSize = '29vw'
    const heart = document.createElement('img')
    heart.src = 'like.svg'
    heart.setAttribute('class', 'like')
    heart.addEventListener('click', like)
    slide.append(heart)
    for (let item of favArr) {
        if (slide.getAttribute('name') === item.name) {
            heart.src = 'like-red.svg'
            heart.removeEventListener('click',like)
            heart.addEventListener('click',unlike)
        }
    }
    slide.addEventListener('click', chosenOne)
    slides.append(slide)

}

function sliderAdjust(arr) {
    rightindex.innerText = Math.ceil(arr.length / 6)
}

rightscroll.addEventListener('click',() => {
    if (leftindex.innerText < rightindex.innerText) {
        leftindex.innerText++
        from += leap
        to += leap
        slides.innerHTML = ''
        ownData.forEach((element, i, arr) => {
            if (from <= i &&  i < to)
            makeSlides(element)
        })
        
    }

})

leftscroll.addEventListener('click', () => {
    if (leftindex.innerText <= rightindex.innerText && leftindex.innerText > 1) {
        leftindex.innerText --
        from -= leap
        to -= leap
        slides.innerHTML = ''
        ownData.forEach((element, i, arr) => {
            if (from <= i &&  i < to)
            makeSlides(element)
        })
        
    } 

})

function showType(event) {
    settingsDetails.innerHTML = ''
    showDetail(event, typeArr)
    event.target.removeEventListener('click', showType)
    event.target.addEventListener('click',  removeType)
    event.stopPropagation()
}

function showLang (event) {
    settingsDetails.innerHTML = ''
    showDetail(event, langArr)
    event.target.removeEventListener('click',  showLang)
    event.target.addEventListener('click', removeLang)
    event.stopPropagation()
}

function removeType(event) {
    settingsDetails.innerHTML = ''
    settingsDetails.remove()
    event.target.removeEventListener('click', removeType)
    event.target.addEventListener('click', showType)
    event.stopPropagation()
}

function removeLang (event) {
    settingsDetails.innerHTML = ''
    settingsDetails.remove()
    event.target.removeEventListener('click', removeLang)
    event.target.addEventListener('click', showLang)
    event.stopPropagation()
}

function showDetail(event, arr) {
for (let item of arr) {
    const detail = document.createElement('div')
    detail.setAttribute('class', 'settings-button-detail')
    detail.innerText = item
    if (arr === typeArr){
        detail.addEventListener('click', (event) => addSearchDetail(event))
    }
    
    if (arr === langArr) {
        detail.addEventListener('click', (event) => addSearchDetail(event))
    }
    settingsDetails.append(detail)
    }
    event.target.append(settingsDetails)
}

function addSearchDetail(event) {
    
    if (event.target.parentElement.parentElement.innerText.split('\n')[0] === event.target.innerText){
        if (event.target.parentElement.parentElement.getAttribute('id') === 'lang') {
            event.target.parentElement.parentElement.innerText = defaultLang
            searchLang = undefined
            
        } else {
            event.target.parentElement.parentElement.innerText = defaultType
            searchType = undefined
            
        }
    } else {
        event.target.parentElement.parentElement.innerText = event.target.innerText
        if (typeArr.includes(event.target.innerText)) {
            searchType = event.target.innerText
            
            
        }
        if (langArr.includes(event.target.innerText)) {
            searchLang = event.target.innerText
            
        }
    }

}
  
settingsDetails.addEventListener('click', (event) => {
    event.stopPropagation()
})

type.addEventListener('click', showType)
lang.addEventListener('click', showLang)
searchSettings.addEventListener('click', (event) => {
    event.stopPropagation()
})