
const params = new URLSearchParams(window.location.search)

// console.log(params)

for(const param of params){
    console.log(param)
    let x = param[1]
    console.log(x)
    // showMeTheId(x)
}

function showMeTheId(val){
    alert(val);
}


// let eles = document.querySelectorAll(selector);

let paras = document.querySelectorAll('p');
console.log(paras)
for(let p of paras){
    p.style.color = 'blue';
}