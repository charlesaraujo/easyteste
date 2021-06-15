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
