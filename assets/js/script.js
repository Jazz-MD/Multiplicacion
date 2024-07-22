let num = parseInt(prompt("Ingresa un número: "));

const tablas = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

const factorial = (num) => {
  for (let i = 1; i <= num; i++) {
    let fact = 1;
    for (j = 1; j <= i; j++) {
      fact *= j;
    }
    console.log(`Factorial de ${i} = ${fact}`);
  }
};

if (num < 1 || num > 20) {
  alert("Numero invalido");
} else {
  tablas(num);
  factorial(num);
}