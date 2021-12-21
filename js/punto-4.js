const num1 = parseInt(prompt("ingresa el numero"));
const num2 = parseInt(prompt("ingresa el numero"));
const num3 = parseInt(prompt("ingresa el numero"));

if (num1 > num2 && num1 > num3) {
  alert(`el mayor es :${num1}`);
} else if (num2 > num1 && num2 > num3) {
  alert(`el mayor es ${num2}`);
} else if (num3 > num1 && num3 > num2) {
  alert(`el mayor es ${num3}`);
}
