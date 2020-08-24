'use strict'

let burgers = [];

document.querySelector('#submit').addEventListener('click', function () {
    let burger = new Burger();
    // console.log(burger.size);
    // console.log(burger.filling);
    // console.log(burger.adds);
    burgers.push(burger);
    burger._renderResult();
})

class Burger {
    constructor() {
        this.size = document.querySelector('input[name="size"]:checked').value;
        this.filling = document.querySelector('input[name="filling"]:checked').value;
        this.adds = this._getAdds();
    }

    _getAdds() {
        let arr = []
        let elements = document.querySelectorAll('input[name="add"]:checked');
        for (let elem of elements) {
            arr.push(elem.value);
        }
        return arr;
    }

    _getPrice() {

    }

    _getCals() {

    }

    _renderResult() {
        let container = document.querySelector('#ordered-burgers');
        let div = document.createElement('div');
        div.innerHTML = `
            <div id="burger-description">
                <span id="result-number">${burgers.length}. </span>
                <span id="result-size">Размер: <b>${this.size}</b>; </span>
                <span id="result-filling">Начинка: <b>${this.filling}</b>; </span>
                <span id="result-add">Добавка: <b>${this.adds.join()}</b>; </span>
            </div>
            <div id="burger-values">
                <span id="result-price"> р.; </span>
                <span id="result-cals"> кКал; </span>
            </div>
            <br>
        `;
        container.append(div);
    }
}

