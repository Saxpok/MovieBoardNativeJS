let favArr = []

function chosenOne () {
    const chosen = document.createElement('div')
    chosen.setAttribute('class', 'chosen')
    const cardOfChosen = document.createElement('div')
    cardOfChosen.addEventListener('click', () => {
        event.stopPropagation()
    })
    cardOfChosen.setAttribute('class', 'cardOfChosen')
    cardOfChosen.style.backgroundImage = event.target.style.backgroundImage
    const cardDescription = document.createElement('div')
    cardDescription.setAttribute('class', 'cardDescription')
    cardDescription.addEventListener('click', () => {
        event.stopPropagation()
    })
    cardDescription.innerText = `${event.target.getAttribute('name')}

    film type: ${event.target.getAttribute('type')}
    
    film lang: ${event.target.getAttribute('lang')}
    
    premiere: ${event.target.getAttribute('age')}
    `
    cardOfChosen.append(cardDescription)
    chosen.append(cardOfChosen)
    chosen.addEventListener('click', () => {
        event.target.remove()
    })
    main.append(chosen)
}

function like () {
    event.stopPropagation()
    let film = {}
    film.name = event.target.parentElement.getAttribute('name')
    film.img = event.target.parentElement.style.backgroundImage
    film.type = event.target.parentElement.getAttribute('type')
    film.lang = event.target.parentElement.getAttribute('lang')
    favArr.push(film)
    event.target.src = 'like-red.svg'
    event.target.removeEventListener('click', like)
    event.target.addEventListener('click', unlike)
}

function unlike () {
    event.stopPropagation()
    favArr = favArr.filter((item) => {
        return item.img !== event.target.parentElement.style.backgroundImage
    })
    event.target.src = 'like.svg'
    event.target.removeEventListener('click', unlike)
    event.target.addEventListener('click', like)
}

function biuldFavourite () {
    if (!favArr.length) {
        favourite.setAttribute('class', 'favourite-empty')
        favourite.innerText = 'No Favourite :('
    } else {
        favourite.setAttribute('class', 'slides')
        favArr.forEach((item) => {
            const slide = document.createElement('div')
            slide.setAttribute('class', 'slide')
            slide.setAttribute('name', item.name)
            slide.setAttribute('type', item.type)
            slide.setAttribute('lang', item.lang)
            slide.style.backgroundImage = item.img
            slide.style.backgroundRepeat = 'no-repeat'
            slide.style.backgroundSize = '29vw'
            slide.addEventListener('click', chosenOne)
            favourite.append(slide)
            const heart = document.createElement('img')
            heart.src = 'like-red.svg'
            heart.setAttribute('class', 'like')
            heart.addEventListener('click', unlike)
            slide.append(heart)
        })
    }
}