console.clear()
console.log('Script index.js loaded')

const buttonSolutions = document.querySelectorAll('.q-card__button')
const toggleSolutions = document.querySelectorAll('.q-card__solution')
const toggleBookmarks = document.querySelectorAll('.q-card__bookmark')

buttonSolutions.forEach( (buttonSingle, index) => {
    buttonSingle.addEventListener('click', () => { 
    toggleSolutions[index].classList.toggle('q-card__solution--hidden');
    if (buttonSingle.innerText === "Show answer") {
        buttonSingle.innerText = 'Hide answer'
    } else {buttonSingle.innerText = 'Show answer'}
      
           } )
})

toggleBookmarks.forEach( (toggleBookmark, index) => {
    toggleBookmark.addEventListener('click', () => {
        if (toggleBookmark.getAttribute('src') === './components/icon/bookmark-line.svg') {
        toggleBookmark.setAttribute ('src','./components/icon/bookmark-fill.svg')} else {
            toggleBookmark.setAttribute ('src','./components/icon/bookmark-line.svg')
        }
        console.log(toggleBookmark.getAttribute('src'))    
    })
    
})

