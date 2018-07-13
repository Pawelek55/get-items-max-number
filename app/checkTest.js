function getItemsMaxNumber(arrayItems) {
    let arrNumber = [];
    if (arrayItems.length === 0) {
        return 0;
    };
    arrayItems
        .map(item => item.name)
        .map(itAndNr => {
            let reg = /\W*[0-9]{1,}$/;
            if (reg.test(itAndNr) === true) {
                let nr = parseFloat(reg.exec(itAndNr));
                arrNumber.push(nr);
            } else {
                return arrNumber = [0];
            };
        });
    return Math.max.apply(null, arrNumber);
};

module.exports = getItemsMaxNumber;
