let namesetbtn = document.querySelector('button');
namesetbtn.addEventListener('click',inputMsg);

function inputMsg() {
    let name = prompt ('Enter Name of student');
    namesetbtn.textContent = 'Roll No. 1:' + name;
}