
var mydate = new Date();

function watch() {
    var date = new Date();
    var hr,
        m =
            date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes(),
        sec =
            date.getSeconds() < 10
                ? "0" + date.getSeconds()
                : date.getSeconds(),
        dn = date.getHours() >= 10 ? "PM" : "AM";

    if (date.getHours() == 0) {
        hr = 12;
    } else if (date.getHours() > 12) {
        hr = date.getHours() - 12;
    } else {
        hr = date.getHours();
    }

    var currentTime = hr + ":" + m + ":" + sec;
    document.getElementsByClassName("h")[0].innerHTML = currentTime;
    document.getElementsByClassName("dn")[0].innerHTML = dn;

    var day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        date = mydate.getDate();
    year = new Date().getFullYear();

    var currentDate =
        day[mydate.getDay()] +
        ", " +
        month[mydate.getMonth()] +
        " " +
        date +
        ", " +
        year;
    document.getElementsByClassName("dt")[0].innerHTML = currentDate;
}

watch();
setInterval(function () {
    watch();
}, 1000);