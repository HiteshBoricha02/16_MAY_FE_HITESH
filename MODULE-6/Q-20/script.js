let inp1 = document.querySelector("#inp1").value;
let inp2 = document.querySelector("#inp2").value;
let inp3 = document.querySelector("#inp3").value;
let inp4 = document.querySelector("#inp4").value;
let inp5 = document.querySelector("#inp5").value;
let inp6 = document.querySelector("#inp6").value;
let inp7 = document.querySelector("#inp7").value;

var ans = document.querySelector("#total");
const percentage = document.querySelector("#per");

const button = document.querySelector("button");

button.addEventListener('click' , () => {
    const total = parseInt(inp1) + parseInt(inp2) + parseInt(inp3) + parseInt(inp4) + parseInt(inp5) + parseInt(inp6) + parseInt(inp7);

    ans.innerHTML = total;

    const per = total / 350 * 100;
    percentage.innerHTML = per.toFixed(2);
});
