const btn1 = document.querySelector('.btn01');
const btn2 = document.querySelector('.btn02');
const btn3 = document.querySelector('.btn03');
const btnBack = document.querySelector('.btn2');
const btnNext = document.querySelector('.btn3');
const reqField = document.getElementById('required');

const form1 = document.querySelector('.form');
const form2 = document.querySelector('.form2');

btnNext.addEventListener('click', () => {
  if (reqField.value.length == 0) {
    alert('Please Fill Required Field');
  } else {
    btn1.classList.add('active');
    btnBack.classList.add('active');
    // form1.classList.remove('active');
    // form2.classList.add('active');
  }
});

btnBack.addEventListener('click', () => {
  btnBack.classList.remove('active');
  btn1.classList.remove('active');
});
