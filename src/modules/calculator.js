const calculator = () => {
    const clubs = document.querySelector('.clubs'),
        time = document.querySelector('.time'),
        priceTotal = document.getElementById('price-total'),
        promocode = document.getElementById('promocode');

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

    const getClubChecked = () => {
        const clubName = document.getElementsByName('club-name');
            if (clubName[0].checked){
                priceList = mozaikaPrices;
            } else if (clubName[1].checked){
                priceList = schelkovoPrices;
            }
        return priceList
    };

    const getPeriod = () => {
        time.addEventListener('click', event => {
            getClubChecked();

            const target = event.target;
            if (target.previousElementSibling.value === '1'){
                target.previousElementSibling.checked = true;
                period = '1';
                applyDiscount();
                changePrice(priceList, period);
            }
            if (target.previousElementSibling.value === '6'){
                target.previousElementSibling.checked = true;
                period = '6';
                applyDiscount();
                changePrice(priceList, period);
            }
            if (target.previousElementSibling.value === '9'){
                target.previousElementSibling.checked = true;
                period = '9';
                applyDiscount();
                changePrice(priceList, period);
            }
            if (target.previousElementSibling.value === '12'){
                target.previousElementSibling.checked = true;
                period = '12';
                applyDiscount();
                changePrice(priceList, period);
            }
        });
        return period
    };

    const changePrice = (priceList, period) => {
        priceTotal.textContent = priceList[period]
    };

    clubs.addEventListener('click', event => {
        const target = event.target;
        getPeriod();

        if(target.previousElementSibling.value === 'schelkovo'){
            target.previousElementSibling.checked = true;
            applyDiscount();
            changePrice(priceList, period);
        }

        if(target.previousElementSibling.value === 'mozaika'){
            target.previousElementSibling.checked = true;
            applyDiscount();
            changePrice(priceList, period);
        }
    });

    const applyDiscount = () => {
        if (promocode.value !== null && promocode.value !== ''){
            if (promocode.value.toUpperCase() === 'ТЕЛО2020'){
                getClubChecked();
                getPeriod();
                priceList = priceList.map(elem => Math.floor(elem * 0.7))
                return priceList
            }
        }
    };

    promocode.addEventListener('change', () => {
        applyDiscount();
        changePrice(priceList, period);
    });

    getPeriod();
    changePrice(mozaikaPrices, period);
};

export default calculator;