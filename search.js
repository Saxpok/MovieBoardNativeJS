
let searchLink = 'http://api.tvmaze.com/search/shows?q='
let searchInput = 'nature'
const searchBtn = document.getElementById('search-button')
const detailsHolder = document.getElementById('details-holder')
let ownData = []
let isFiltering = false
let searchType
let searchLang
setSearch()

function searchByButton () {
    if(!document.getElementById('search-input').value) {
        setSearch()
    } else {
        searchInput = document.getElementById('search-input').value
        localStorage.setItem('searchInput', document.getElementById('search-input').value)
        searchInput = localStorage.getItem('searchInput')
        setSearch()
    }
    
}

function setSearch() {
    if (searchType || searchLang) {
        isFiltering = true
    } else {
        isFiltering = false
    }

    if(searchInput) {
        slides.innerHTML = ''
        const searchRequest = fetch(`${searchLink}${searchInput}`)
        searchRequest
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                let filmsArr = []
                data.forEach((element) => {
                filmsArr.push(element)
            });
            return filmsArr
        })
            .then((arr) => {
                if (!isFiltering) {
                    ownData = [...arr]
                    sliderAdjust(ownData)
                    processElements(ownData)
                } else {
                    ownData = ownData.filter((item) => {
                        if (searchLang && searchType) {
                            return item.show.type === searchType && item.show.language === searchLang
                        }
                        if (searchType) {
                            return item.show.type === searchType 
                        }
                        if (searchLang) {
                            return item.show.language === searchLang
                        }
                    })
                    sliderAdjust(ownData)
                    processElements(ownData)
                    ownData = [...arr]
                }
        })
            .catch((err) => {
                slides.innerText = 'Something Went Wrong :('
            })
    }
     
}

searchBtn.addEventListener('click', searchByButton)