function getDay() {
    let dayNum = new Date().getDay();
    let day = "";
    switch (dayNum) {
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
    }
    return day;
}

let result = getDay();
alert(result);
