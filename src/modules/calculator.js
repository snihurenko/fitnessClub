const calculator = () => {
    const form = document.getElementById('card_order'),
        time = document.querySelector('.time'),
        priceTotal = document.getElementById('price-total');

    const mozaikaPrices = new Array();
        mozaikaPrices["1"]=1999;
        mozaikaPrices["6"]=9900;
        mozaikaPrices["9"]=13900;
        mozaikaPrices["12"]=19900;

    const schelkovoPrices = new Array();
        schelkovoPrices["1"]=2999;
        schelkovoPrices["6"]=14990;
        schelkovoPrices["9"]=21990;
        schelkovoPrices["12"]=24990;

    let period = 1;
    let priceList = [];

    const getPeriod = () => {

        time.addEventListener('click', event => {

            const clubName = document.getElementsByName('club-name');
            if (clubName[0].checked){
                priceList = mozaikaPrices;
            } else if (clubName[1].checked){
                priceList = schelkovoPrices;
            }

            const target = event.target;
            if (target.previousElementSibling.value === '1'){
                target.previousElementSibling.checked = true;
                period = '1';
                changePrice(priceList, period);
            }
            if (target.previousElementSibling.value === '6'){
                target.previousElementSibling.checked = true;
                period = '6';
                changePrice(priceList, period);
            }
            if (target.previousElementSibling.value === '9'){
                target.previousElementSibling.checked = true;
                period = '9';
                changePrice(priceList, period);
            }
            if (target.previousElementSibling.value === '12'){
                target.previousElementSibling.checked = true;
                period = '12';
                changePrice(priceList, period);
            }
        });
        return period
    };

    const changePrice = (priceList, period) => {
        priceTotal.textContent = priceList[period]
    };

    document.addEventListener('click', event => {
        const target = event.target;
        getPeriod();

        if(target.previousElementSibling.value === 'schelkovo'){
            target.previousElementSibling.checked = true;
            changePrice(schelkovoPrices, period);
        }

        if(target.previousElementSibling.value === 'mozaika'){
            target.previousElementSibling.checked = true;
            changePrice(mozaikaPrices, period);
        }
    });

    getPeriod();
    changePrice(mozaikaPrices, period);

};

export default calculator;