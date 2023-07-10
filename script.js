let pass = document.getElementById('password');
let mode = 'hide';
let i = document.getElementById('pass_img');
function showPass() {
  if (mode == 'hide') {
    pass.setAttribute('type', 'text');
    i.setAttribute('class', 'fa-solid fa-eye-slash');
    mode = 'show';
  } else if (mode == 'show') {
    pass.setAttribute('type', 'password');
    i.setAttribute('class', 'fa-solid fa-eye');
    mode = 'hide';
  }
}

let cpass = document.getElementById('check-password');
let mode1 = 'hide';
let i1 = document.getElementById('check_pass_img');
function showConfPass() {
  if (mode1 == 'hide') {
    cpass.setAttribute('type', 'text');
    i1.setAttribute('class', 'fa-solid fa-eye-slash');
    mode1 = 'show';
  } else if (mode1 == 'show') {
    cpass.setAttribute('type', 'password');
    i1.setAttribute('class', 'fa-solid fa-eye');
    mode1 = 'hide';
  }
}

function checkPass() {
  let p = document.getElementById('password').value;
  console.log(p);
  let cp = document.getElementById('check-password').value;
  let cpass = document.getElementById('check-password');
  if (p == cp) {
    cpass.classList.add('success');
  } else {
    cpass.classList.remove('success');
    cpass.classList.add('error');
    alert("The passwords don't match!!!");
  }
}
