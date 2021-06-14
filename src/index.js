import "./static/styles/styles.scss";
import "./app/app";

window.addEventListener("load", () => {
  setup();
});

const setup = () => {
  const main = document.querySelector("main");
  const app = document.createElement("ez-app");
  main.appendChild(app);
};
/**
 * TODO
 * REQ:
 * -TESTES UNITARIOS
 * -BOAS PRATICAS DE OO
 * -INSTRUÇOES NO REDME
 * -DESCRIÇÃO DE COMO FOI FEITO
 *
 * PLUS:
 * -TESTE E2E
 * -PWA
 */
