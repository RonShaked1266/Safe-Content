'use strict'

function makeId(length=5){
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for(var i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}


function getTimeStamp(time){
    // var time = Date.now()
    // console.log('time:', time)
    var newDate = new Date(time)
    // console.log('newDate:', newDate)
    var year = newDate.getFullYear()
    // console.log('year:', year)
    var month = newDate.getMonth() + 1
    // console.log('month:', month)
    var date = newDate.getDate()
    // console.log('date:', date)
    var hours = newDate.getHours()
    // console.log('hours:', hours)
    var minutes = newDate.getMinutes()

    var monthToDisplay = (month+'').padStart(2, '0')
    var dateToDisplay = (date+'').padStart(2, '0')
    var hoursToDisplay = (hours+'').padStart(2, '0')
    var minutesToDisplay = (minutes+'').padStart(2, '0')

    var timeStamp = year + '-' + monthToDisplay + '-' + dateToDisplay + ' ' + hoursToDisplay + ':' + minutesToDisplay
    // console.log('timeStamp:', timeStamp)
    return timeStamp
}