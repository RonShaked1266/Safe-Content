'use strict'

function onInit() {
    console.log('Document is ready')
    var activeUser = getLoggedInUser()
    console.log('loggedInUser', activeUser);
    if (activeUser) {
        toggleDisplay()
        const elPageName = document.querySelector('.page-name')
        elPageName.innerText = `Welcome back: ${activeUser.username}`
    }
}

function toggleDisplay() {
    var elSecretContent = document.querySelector('.secret-content')
    elSecretContent.classList.toggle('hide')
    var elSignIn = document.querySelector('.sign-in')
    elSignIn.classList.toggle('hide')
}

function OndoLogin(ev) {
    ev.preventDefault()
    const elUserName = document.querySelector('[name=username]')
    const elPassword = document.querySelector('[name=password]')
    var user = doLogin(elUserName.value, elPassword.value)
    // console.log(elUserName.value)
    elUserName.value = ''
    elPassword.value = ''
    if (!user) return alert('wrong password or username')
    toggleDisplay()
    const elPageName = document.querySelector('.page-name')
    elPageName.innerText = `Welcome back: ${user.username}`
}

function OndoLogout(ev) {
    ev.preventDefault()
    const elPageName = document.querySelector('.page-name')
    elPageName.innerText = `Sign in!`
    toggleDisplay()
    saveLoggedIn(null)

}

function onAdminClick() {
    window.location = 'adminPage.html'
}