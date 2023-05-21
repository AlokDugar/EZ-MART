let pass = document.getElementById('password');
let mode = 'hide';
let i = document.getElementById('pass_img');
function showPass() {
  console.log('Activate');
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
function checkPass() {
  let p = document.getElementById('password').value;
  console.log(p);
  let cp = document.getElementById('cpassword').value;
  let cpass = document.getElementById('cpassword');
  if (p == cp) {
    cpass.classList.add('success');
    console.log('matched!');
  } else {
    cpass.classList.remove('success');
    cpass.classList.add('error');
  }
}
