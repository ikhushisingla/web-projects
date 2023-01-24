//- Bring in toggle buttons(querySelectorAll)
//- Loop through NodeList(forEach)
//- Add click event(addEventListener)
//- toggle the active class on the parent Node(.parentNode & classlist.toggle)

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})