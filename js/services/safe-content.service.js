'use strict'

var gUsers
_createUsers()


function getUsersToShow() {
    return gUsers
}

function setSort(sortBy) {
    gUsers.sort((user1, user2) => {
        if (sortBy === 'username') {
            const capitalUser1 = user1.username.toUpperCase()
            const capitalUser2 = user2.username.toUpperCase()
            return capitalUser1 < capitalUser2 ? -1 : 1
        }
        return user2[sortBy] - user1[sortBy]
    })
}

function doLogin(userName, password) {
    const user = gUsers.find(user => user.username === userName && user.password === password)
    updateLastLogin(user)
    saveLoggedIn(user)
    return user
}

function updateLastLogin(user) {
    user.lastLoginTime = Date.now()
    _saveUsers()
}

function _createUsers() {
    var users = loadFromStorage('usersDB')
    if (!users || !users.length) {
        users = [
            _createUser('Ron',  '1234', true),
            _createUser('Amit',  '1233', false),
            _createUser('Bob',  '1212', false)
        ]
    }
    gUsers = users
    _saveUsers()
}

function _createUser(username, password, isAdmin) {
    const user = {
        id: makeId(),
        username: username,
        password: password,
        lastLoginTime: Date.now(),
        isAdmin: isAdmin
    }
    return user
}

function _saveUsers() {
    saveToStorage('usersDB', gUsers)
}

function saveLoggedIn(user) {
    saveToStorage('loggedInUser', user)
}

function getLoggedInUser() {
    return loadFromStorage('loggedInUser')
}