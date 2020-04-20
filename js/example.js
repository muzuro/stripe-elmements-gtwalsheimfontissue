(function() {
    'use strict';

    var elements = stripe.elements({
        fonts: [
            {
                cssSrc: 'css/fonts/fonts.css',
            },
        ],
    });

    var elementStyles = {
        base: {
            fontFamily: 'GT-Walsheim Regular',
            fontSize: '25px',
        },
    };

    var cardNumber = elements.create('cardNumber', {
        style: elementStyles,
    });
    cardNumber.mount('#example-card-number');
})();
