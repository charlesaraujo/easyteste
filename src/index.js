import "./static/styles/styles.scss";
import "./app/app";

window.addEventListener("load", () => {
  setup();
});

const setup = async () => {
  const main = document.querySelector("main");
  const app = document.createElement("ez-app");
  main.appendChild(app);
};
/**
 * TODO
 * 2 PAGINAS? 1 PAGINA E MODAL
 * MODAL
 * --UTILIZAR O MESMO PARA CADASTRO E PARA EDIÇÃO
 *
 * LISTA
 * -EXCLUIR CADASTROS
 * REQ:
 * -TESTES UNITARIOS
 * -BOAS PRATICAS DE OO
 * -INSTRUÇOES NO REDME
 * -DESCRIÇÃO DE COMO FOI FEITO
 * PLUS:
 * -RESPONSIVIDADE
 * -PERMITIR EDIÇÃO
 * -TESTE E2E
 * -PWA
 *
 *
 */
