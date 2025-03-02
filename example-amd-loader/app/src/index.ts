import { cdn } from './cdn'

const $div = document.createElement('div')

$div.innerHTML = `
    </div>
        <button class="load">load package</button>
        <button class="calc">calc data</button>
    </div>
`

document.body.appendChild($div)

const $load = document.body.querySelector('.load') as HTMLButtonElement
const $calc = document.body.querySelector('.calc') as HTMLButtonElement

$load.addEventListener('click', () => {
    cdn.package2.load()
    cdn.package1.load()
})

$calc.addEventListener('click', () => {
    const { Calc, Item } = cdn.package1.pack
    const { CalcSub } = cdn.package2.pack

    const calc = new Calc({ value: 10 })
    calc.add(new Item({ value1: 2, value2: 3 }))
    calc.add(new Item({ value1: 7, value2: 8 }))
    console.log(calc.calc())

    const sub = new CalcSub({ value1: 3, value2: 2 })
    console.log(sub.calc())
})
