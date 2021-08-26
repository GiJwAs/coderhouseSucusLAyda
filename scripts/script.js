const toggleButton = document.getElementsByClassName('containerNavbar__toggle-button')[0]
const navbarLinks = document.getElementsByClassName('containerNavbar__navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
