const caso1 = parseint(prompt("total de pregunta"));
const caso2 = parseint(prompt("total de pregunta correcta"));

const resultado = (caso2 * 100) / caso1;
if (resultado >= 90) {
  alert("messi");
}
if (resultado >= 75 && resultado < 90) {
  alert("neymar");
}
if (resultado >= 50 && resultado < 75) {
  alert("mbape");
}
