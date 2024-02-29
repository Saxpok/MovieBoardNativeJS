const companyDescription = `Добро пожаловать в уникальный мир кинематографа, где каждый момент превращается в незабываемую историю. 

Наш кинотеатр — это не просто место для просмотра фильмов, это настоящий кинематографический опыт высшего класса. 

Наша гордость — передовая технология звука и изображения, погружающая каждого зрителя в атмосферу сюжета.`

const contactInfo = `@Saxpok
https://github.com/Saxpok`

//
const main = document.getElementById('main')
//

const title = document.getElementById('title') 

//MENU BUTTONS

const aboutBtn = document.getElementById('about')

const filmsBtn  = document.getElementById('films')

const favouriteBtn = document.getElementById('fav')

const contactsBtn = document.getElementById('cont')

//FILMS PAGE

const search = document.getElementById('search')

const searchSettings = document.getElementById('settings')

const slides = document.getElementById('slides')

const pages = document.getElementById('pages')

filmsBtn.addEventListener('click', addFilms)

function addFilms () {
    about.remove()
    favourite.remove()
    contacts.remove()
    main.append(search)
    main.append(searchSettings)
    main.append(slides)
    main.append(pages)
    setSearch()
    title.innerText = 'FILMS'
}

//ABOUT PAGE

const about = document.createElement('div')

about.setAttribute('class', 'about')

about.innerText = companyDescription

about.style.padding = '2%'

aboutBtn.addEventListener('click',addAbout)

function addAbout() {
    search.remove()
    searchSettings.remove()
    slides.remove()
    pages.remove()
    contacts.remove()
    favourite.remove()
    main.append(about)
    title.innerText = 'ABOUT'
}

//CONTACTS PAGE

const contacts = document.createElement('div')

contacts.setAttribute('class', 'contacts')

contacts.innerText = contactInfo

contacts.style.padding = '2%'

contactsBtn.addEventListener('click', addContacts)

function addContacts() {
    search.remove()
    searchSettings.remove()
    slides.remove()
    pages.remove()
    about.remove()
    favourite.remove()
    main.append(contacts)
    title.innerText = 'CONTACTS'
}

//FAVOURITE PAGE

const favourite = document.createElement('div')

favourite.setAttribute('class', 'slides')

favouriteBtn.addEventListener('click', addFavourite)

function addFavourite () {
    search.remove()
    searchSettings.remove()
    slides.remove()
    pages.remove()
    about.remove()
    contacts.remove()
    favourite.innerHTML = ''
    main.append(favourite)
    title.innerText = 'FAVOURITE'
    biuldFavourite()
}


function restart () {
    location.reload()
}



