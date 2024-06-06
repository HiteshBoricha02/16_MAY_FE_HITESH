const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const res = document.getElementById("result");

document.getElementById("add").addEventListener("click" ,  () => {
    res.value = parseFloat(n1.value) + parseFloat(n2.value);
});

document.getElementById("sub").addEventListener("click" ,  () => {
    res.value = parseFloat(n1.value) - parseFloat(n2.value);
});

document.getElementById("mul").addEventListener("click" ,  () => {
    res.value = parseFloat(n1.value) * parseFloat(n2.value);
});

document.getElementById("rem").addEventListener("click" ,  () => {
    res.value = parseFloat(n1.value) % parseFloat(n2.value);
});

document.getElementById("div").addEventListener("click" ,  () => {
    res.value = parseFloat(n1.value) / parseFloat(n2.value);
});
