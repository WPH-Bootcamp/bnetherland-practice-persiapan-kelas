const buttonLogin = document.getElementById('btnLogin');

buttonLogin.addEventListener('click', function () {
  alert('Login success');
});

const sayaLapar = false;

if (sayaLapar) {
  console.log('Saya makan');
} else {
  console.log('Saya tidak makan');
}

const price = 10_000;
const qty = 3;

const total = price * qty;
console.log(total);

// Input
const score = 100;
let predikat = '';

// Process
if (score >= 75) {
  predikat = 'Lulus';
} else {
  predikat = 'Tidak Lulus';
}

// Output
console.log(`Nilai ${score} : ${predikat}`);
