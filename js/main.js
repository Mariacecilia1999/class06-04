
//Query selector
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const addignName = (e) =>{
   e.preventDefault()
   let capturedName = $('.inputClass').value
   console.log(capturedName)
   const showResult = document.createElement('div')
   showResult.innerHTML += `<div><h3>${capturedName}</h3></div>`
   const body = $('body')
   body.appendChild(showResult)
   $('.inputClass').value = ''
}

const tagsHTML = () =>{
   const body = $('body')
   const divInput = document.createElement('div')
   body.appendChild(divInput)
   const form = document.createElement('form')
   let input = document.createElement('input')
   input.setAttribute('type', 'text')
   input.setAttribute('placeholder', 'Your Name')
   input.classList.add('inputClass')
   divInput.appendChild(form)
   form.appendChild(input)
   const button = document.createElement('button')
   form.appendChild(button)
   button.innerText = 'Add'
   button.addEventListener('click', addignName)
}
tagsHTML()

