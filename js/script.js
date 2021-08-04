const inchToCm = () => {

    let div = document.getElementById('root');
    let input = document.getElementById('input');
    let n = input.value;
    let cm = 2.54 * n;

    div.innerText = `${n} inch = ${cm} cm`;
}

let button = document.getElementById('button');
button.addEventListener('click', inchToCm)