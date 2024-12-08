let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let output = document.querySelector("#out");
let data = '';


setInterval(() => {
    if (data != "")
        console.log("Delayed for 1 second.");
    data = input.value;
    if (data.at(-1) == '=')
        calculation();
    input.setAttribute('autofocus', true);

}, 500);


function storeData(curr) {
    data += curr;
    input.value = data;
    input.scroll(1000, 0);
}
function clearData() {
    data = '';
    input.value = data;
    output.innerText = data;
    ans = data;
}
function isOperator() {
    if (data.at(-1) == '+');
}
function calculation() {
    let ans = solution();
    input.value = '';
    data = ans;
    output.innerText = data;
}
function solution() {
    console.log("solve");
    return 5;
}



buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.innerText);
        if (btn.innerText == 'C')
            clearData();
        else if (btn.innerText == '=')
            calculation();
        else
            storeData(btn.innerText);

    })
})
