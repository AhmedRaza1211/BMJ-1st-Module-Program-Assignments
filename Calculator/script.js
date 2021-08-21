function getValue(num) {
    let inp = document.getElementById('input');
    inp.value += num;
    console.log(inp);
}

function calculate() {
    let inp = document.getElementById('input');
    inp.value = eval(inp.value);
}

function clear12() {
    let inp = document.getElementById('input');
    inp.value = inp.value.slice(0, -1);
}

function empty() {
    let inp = document.getElementById('input');
    inp.value = "";
}



