const btn = document.querySelector('.btn');
const inputs = document.querySelector('.input');
const result = document.querySelector('.result');
const placement = document.querySelector('.placement');

function check(){
    if(Math.round(inputs.value) % 2 == 0 && inputs.value != ''){
        result.innerHTML = '<p h4 class = "mt-4 text-center text-danger">Number is EVEN 😎</p>'
        placement.innerHTML = '<p h4 class="card-title text-center mb-3 text-danger">🎁Hurray Even🎁</p>'
    } else if(Math.round(inputs.value) % 2 == 1 && inputs.value != ''){
        result.innerHTML = '<p h4 class = "mt-4 text-center text-warning">Number is ODD 😋</p>'
        placement.innerHTML = '<p h4 class="card-title text-center mb-3 text-danger">🎁Hurray ODD🎁</p>'
    }
}