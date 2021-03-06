import './scss/reset.scss'
import './scss/style.scss'
import './scss/header.scss'
import './scss/typography.scss'
import './scss/__const.scss'
import './scss/form.scss'
import './scss/main.scss'


import {addCrads, transformCards} from './js/card'
import './js/addForm'
import deleteCard from './js/deleteCard'
import {getInfo} from './js/service'
import addForm from './js/addForm'


window.addEventListener('DOMContentLoaded', () => {
    
    const cards = getInfo('http://localhost:3000/cards')

    cards.then(cards => {
        addCrads(cards)
    })


    addForm()
    
    document.querySelector('.main__side').addEventListener('click', (e) => {
        if (e.target.classList.contains('trash')){
            deleteCard(e.target.parentElement.getAttribute('id'))
        }
    })
    
    
})