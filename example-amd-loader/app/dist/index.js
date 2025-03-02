/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// import { Calc, Item } from '../../packages/dist/package1'
// import { CalcSub } from '../../packages/dist/package2'
window.requirejs.config({
    baseUrl: 'http://localhost:8080/',
});

window.requirejs(['package2'], (a) => {
    console.log(a);
});

// console.log(Calc, Item, CalcSub)
// import('http://localhost:8080/package1.js')
const $div = document.createElement('div');
$div.innerHTML = `
    <button>calc 1</button>
    <button>calc 2</button>
`;
const [$button1, $button2] = [...$div.querySelectorAll('button')];
$button1.addEventListener('click', () => {
    // const calc = new Calc({ value: 1 })
    // calc.add(new Item({ value1: 2, value2: 3 }))
    // calc.add(new Item({ value1: 5, value2: 9 }))
    // const result = calc.calc()
    // console.log(result)
});
document.body.appendChild($div);

/******/ })()
;
//# sourceMappingURL=index.js.map