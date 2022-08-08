'use strict'

function InitAdminPage() {
    // console.log('InitAdminPage')
    renderUsers()
}

function renderUsers() {
    var users = getUsersToShow()
    var strHTMLs = users.map(user =>
        `
        <tr>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${getTimeStamp(user.lastLoginTime)}</td>
            <td>${user.isAdmin}</td>
        </tr>
        `
    )
    strHTMLs = strHTMLs.join('')
    strHTMLs = `<tr>
                    <th>user name</th>
                    <th>password</th>
                    <th>lastLoginTime</th>
                    <th>is admin</th>
                </tr>` + strHTMLs

    // console.log('strHTMLs:', strHTMLs)
    document.querySelector('.usersTable').innerHTML = strHTMLs
}

function onSetSorting(sortBy) {
    setSort(sortBy)
    renderUsers()
}

function onLogoutFromAdmin(ev) {
    ev.preventDefault()
    window.location = 'index.html'
}