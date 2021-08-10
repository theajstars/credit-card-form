function formatCardNumber(number){
    number = number.split("-").join("")
    if(number.length > 0){
        number = number.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    return number
}
function formatExpiryDate(number){
    number = number.split("/").join("")
    if(number.length > 0){
        number = number.match(new RegExp('.{1,2}', 'g')).join("/");
    }
    return number
}
function cardValidate(name, number, date, cvv, zip){
    number = number.split("-").join("")
    // number = parseInt(number)
    console.log(number)
    return new Promise((resolve, reject) => {
        var errors = {
            name: false,
            cardNumber: false,
            expiryDate: false,
            cvv: false,
            zip: false
        }
        var errorState = 0;
        if(name === undefined || name.length < 4){
            errors.name = true
            errorState += 1
        }
        if(number.length < 16 || number.length > 19 || isNaN(number) === true){
            errors.cardNumber = true
            errorState += 1;
        }
        if(date.length !== 5 || date === undefined){
            errors.expiryDate = true
            errorState += 1
        }
        if(cvv.length !== 3 || isNaN(cvv) === true){
            errors.cvv = true
            errorState += 1
        }
        if(zip.length < 4 || isNaN(zip)){
            errors.zip = true
            errorState += 1
        }
        resolve([errors, errorState])
    })
}

export { formatCardNumber, formatExpiryDate, cardValidate }
