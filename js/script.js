class Component {
	constructor(id) {
		this.$el = document.getElementById(id)

		this.init()
	}

	init() {

	}

	hide() {
		this.$el.style.display= 'none'

	}

	show() {
        this.$el.style.display= 'block'

	}

}


class TabsComponent extends Component {
    
	constructor(id, tabs, sections) {
		super(id)

		this.tabs = tabs

    }
    
	init() {
        document.addEventListener('DOMContentLoaded', function () {

        })
        this.$el.addEventListener('click', tabsHandlerClick.bind(this))
	}
}

function tabsHandlerClick(e) {
	if (e.target.dataset.tab) {
		this.tabs.forEach(tab => tab.classList.remove('sect-tabs__link--active'))

		e.target.classList.add('sect-tabs__link--active')

	}
}

const tabs = new TabsComponent('tabs', [...document.querySelectorAll('[data-tab]')], {

})

function setMiniLabel() {

	this.parentElement.querySelector('label').classList.add('active')

}
// ==---
function labelCheckFocus() {

	if(this.value != '') {
		this.select();
	}

	setMiniLabel.call(this)
}
// -----
function labelCheckBlur() {

	if (this.value === '' && this.value.trim() === '') {
		this.parentElement.querySelector('label').classList.remove('active')

		return;
	}
}
// -----
function labelCheckChange() {

	if (this.value === '' && this.value.trim() === '') {
		this.parentElement.querySelector('label').classList.remove('active')

		return;
	}
}

let input = document.querySelectorAll('.input')

input.forEach(item => {
	item.addEventListener('focus', labelCheckFocus)
})
input.forEach(item => {
	item.addEventListener('blur', labelCheckBlur)
})

// ===
let calc = document.querySelector('.calculator')
let instruct = document.querySelector('.instruction')
let theory = document.querySelector('.theory')

document.querySelector('[data-tab="calc"]').addEventListener('click', function() {
	calc.classList.remove('hide')
	instruct.classList.add('hide')
	theory.classList.add('hide')
})

document.querySelector('[data-tab="information"]').addEventListener('click', function() {
	calc.classList.add('hide')
	instruct.classList.remove('hide')
	theory.classList.add('hide')
})

document.querySelector('[data-tab="teoria"]').addEventListener('click', function() {
	calc.classList.add('hide')
	instruct.classList.add('hide')
	theory.classList.remove('hide')
})
// --

const button = document.querySelector('.sect-content__btn');
const test = document.querySelector('.sect-output');

button.addEventListener('click', renderPost)

document.addEventListener('keydown', e => {
    if(e.keyCode === 13) {
        renderPost()
    }
})

function renderPost() {
    let la = document.querySelector('.input1');
    let lb = document.querySelector('.input2');
    let lc = document.querySelector('.input3');

    let a = +la.value;
    let b = +lb.value;
    let c = +lc.value;
    let D = 0;
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Можно вводить только числа');
    } else {
        if(a === 0) {
            a = 1
        }
        if (b === 0) {
            b = 1
        }
    
        `D = b<sup>2</sup>-4ac = ${b}<sup>2</sup>${-4}*${a}*${c}= ${b*b}${-4*a*c}=${D = b*b-4*a*c}`
    
        if (c === 0) {
            if (b >= 0) {
                var signB = `+${b}`
            } else {
                var signB = `${b}`
            }
            test.innerHTML = `
                <p class="sect-output__title">Решение</p>
                <span class="sect-output__span sect-output__span--1">Так как уравнение не полное, решим его </span>
                <span class="sect-output__equation">${a}x<sup>2</sup>${signB}x=0</span>
                <p class="conclusion-x">x(${a}x${signB})=0</p>
                x<sub>1</sub>=0
                <p class="decision-x2">${a}x${signB}=0</p>
            `
            if(b % a == 0) {
                test.innerHTML += 
                `
                <div class="value-x1c">
                    x<sub>2</sub>=${b / a}	
                </div>
                `
            } else {
                test.innerHTML += `
                    <div class="value-x2c">
                        <div class="out-x2c">
                            <p class="out-x2c_top"_>${b}</p>
                            <p class="value-x2c__out-x2c">x<sub>2</sub>= </p>
                            <p class="out-x2c__down">${a}</p>                                            
                        </div>
                    </div>
                `
            }
        } else {
        if(D > 0) {
            if (b >= 0) {
                var signB = `+${b}`
            } else {
                var signB = `${b}`
            }
            if (c >= 0) {
                var signC = `+${c}`
            } else {
                var signC = `${c}`
            }
            var asa = -4*a*c;
            if (asa >= 0) {
                var disc = `+${asa}`
            } else {
                var disc = `${asa}`
            }
            test.innerHTML = `
                <p class="sect-output__title">Решение</p>
                <span class="sect-output__equation">${a}x<sup>2</sup>${signB}x${signC}=0</span>
                <span class="sect-output__span sect-output__span--1">Найдем дискриминант квадратного уравнения:</span>
                <p class="sect-output__discriminant">D = b<sup>2</sup>-4ac = ${b}<sup>2</sup>${-4}*${a}*${c}= ${b*b}${disc}=${D = b*b-4*a*c}</p>
                <span class="sect-output__span sect-output__span--2">Так как D > 0 то, уравнение имеет два корня</span>
                <div class="value-x1">
                    <div class="x1-1">
                        <div class="x1-1-top">${-1*b}+√${D}</div>
                        <div class="x1">x<sub>1</sub>=</div>
                        <div class="x1-1-down">2*${a}</div>
                    </div>
                    <div class="x1-2">
                        <div class="x1-2-top">${-1*b}+${+(Math.sqrt(D)).toFixed(2)}</div>
                        <div class="x2-first">=</div>
                        <div class="x1-2-down">${2*a}</div>
                    </div>
                    <div class="x1-3">
                        <p class="out-x1">= ${+((-1*b+(+Math.sqrt(D).toFixed(2)))/(2*a)).toFixed(2)}</p>
                    </div>
                </div>
                <div class="value-x2">
                    <div class="x2-1">
                        <div class="x2-1-top">${-1*b}-√${D}</div>
                        <div class="x2">x<sub>2</sub>=</div>
                        <div class="x2-1-down">2*${a}</div>
                    </div>
                    <div class="x2-2">
                        <div class="x2-2-top">${-1*b}-${+(Math.sqrt(D)).toFixed(2)}</div>
                        <div class="x2-second">=</div>
                        <div class="x2-2-down">${2*a}</div>
                    </div>
                    <div class="x2-3">
                        <p class="out-x2">= ${+((-1*b-(+Math.sqrt(D).toFixed(2)))/(2*a)).toFixed(2)}</p>
                    </div>
                </div>
                <div class="reply-equations">Ответ: x<sub>1</sub>=${+((-1*b+(+Math.sqrt(D).toFixed(2)))/(2*a)).toFixed(2)}; x<sub>2</sub>=${+((-1*b-(+Math.sqrt(D).toFixed(2)))/(2*a)).toFixed(2)}</div>
            `
            } else if(D === 0) {
                if (b >= 0) {
                    var signB = `+${b}`
                } else {
                    var signB = `${b}`
                }
                if (c >= 0) {
                    var signC = `+${c}`
                } else {
                    var signC = `${c}`
                }
                var asa = -4*a*c;
                if (asa >= 0) {
                    var disc = `+${asa}`
                } else {
                    var disc = `${asa}`
                }
                test.innerHTML = `
                    <p class="sect-output__title">Решение</p>
                    <span class="sect-output__equation">${a}x<sup>2</sup>${signB}x${signC}=0</span>
                    <span class="sect-output__span sect-output__span--1">Найдем дискриминант квадратного уравнения:</span>
                    <p class="sect-output__discriminant">D = b<sup>2</sup>-4ac = ${b}<sup>2</sup>${-4}*${a}*${c}= ${b*b}${disc}=${D = b*b-4*a*c}</p>
                    <span class="sect-output__span sect-output__span--2">Так как D = 0 то, уравнение имеет один корень</span>
                    <div class="value-x3">
                        <div class="x3-1">
                            <div class="x3-1-top">${-1*b}</div>
                            <div class="x3">x<sub>1</sub>=</div>
                            <div class="x3-1-down">2*${a}</div>
                        </div>
                        <div class="x3-2">
                            <div class="x3-2-top">${-1*b}</div>
                            <div class="x3-third">=</div>
                            <div class="x3-2-down">${2*a}</div>
                        </div>
                        <div class="x3-3">
                            <p class="out-x3">= ${+((-1*b+(+Math.sqrt(D).toFixed(2)))/(2*a)).toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="reply-equations">Ответ: x<sub>1</sub>=${+((-1*b+(+Math.sqrt(D).toFixed(2)))/(2*a)).toFixed(2)}</div>
                `
            } else {
            if (b >= 0) {
                var signB = `+${b}`
            } else {
                var signB = `${b}`
            }
            if (c >= 0) {
                var signC = `+${c}`
            } else {
                var signC = `${c}`
            }
            var asa = -4*a*c;
            if (asa >= 0) {
                var disc = `+${asa}`
            } else {
                var disc = `${asa}`
            }
            test.innerHTML = `
                <p class="sect-output__title">Решение</p>
                <span class="sect-output__equation">${a}x<sup>2</sup>${signB}x${signC}=0</span>
                <span class="sect-output__span sect-output__span--1">Найдем дискриминант квадратного уравнения:</span>
                <p class="sect-output__discriminant">D = b<sup>2</sup>-4ac = ${b}<sup>2</sup>${-4}*${a}*${c}= ${b*b}${disc}=${D = b*b-4*a*c}</p>
                <span class="sect-output__span sect-output__span--2">Так как D < 0 то, уравнение не имеет корней</span>
            `
            }
        }
    }

}