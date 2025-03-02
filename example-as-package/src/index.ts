import { Calc, Item } from 'package1'
// import { CalcSub } from 'package2'

const $div = document.createElement('div')
$div.innerHTML = `
    <button>calc 1</button>
    <button>calc 2</button>
`
const [$button1, $button2] = [...$div.querySelectorAll('button')]

$button1.addEventListener('click', () => {
    const calc = new Calc({ value: 1 })
    calc.add(new Item({ value1: 2, value2: 3 }))
    calc.add(new Item({ value1: 5, value2: 9 }))
    const result = calc.calc()
    
    console.log(result)
})

// $button2.addEventListener('click', () => {
//     const calc = new CalcSub({ value1: 2, value2: 1 })
//     const result = calc.calc()
    
//     console.log(result)
// })

document.body.appendChild($div)
