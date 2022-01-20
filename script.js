"use strict";
(function (api) {
    const URL_BASE = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
    const divCard = document.querySelector('#divCard');

    api.get = function (e) {

        // divCard.innerHTML = 'Loading';
        divCard.classList.remove('text-danger');
        divCard.classList.remove('text-success');
        divCard.classList.add('text-info');




        fetch(URL_BASE)
            .then(result => result.json())
            .then(data => {
                if (data.cards.length > 0) {
                    divCard.classList.remove('text-info');
                    divCard.classList.add('text-success');
                    // divCard.innerHTML = 'Karaktärer';
                    

                    let imgCard = document.createElement('img');
                    imgCard.src = data.cards[0].images["svg"];
                    imgCard.alt = 'kart';
                    imgCard.classList.add('rounded', 'mx-auto', 'd-block');

                    divCard.appendChild(imgCard);
                }
                else {

                    // divCard.innerHTML = 'Ej Resultat';
                }

            })
            .catch((err) => {
                console.log(err);
                divCard.classList.remove('text-info');
                divCard.classList.add('text-danger');
                // divCard.innerHTML = 'Error';
                // divCard.innerHTML = err;
            })
    }
})(window.api = window.api || {});
const btnDrag = document.querySelector('#btnDrag');
btnDrag.addEventListener('click', api.get); 