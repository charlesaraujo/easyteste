import Data from "./services/data.service";
import "./components/listItem/listItem.component";
import "./components/button/button.component";
import "./components/modalForm/modalForm.component";
import "./app.scss";

class App extends HTMLElement {
  constructor() {
    super();
    this.data = new Data();
    this.users = [];
  }

  async connectedCallback() {
    this.users = await this.data.getFisrtData();
    this.render();
  }

  createList() {
    this.users.forEach((user) => {
      this.createComp(".list-container", "list-item", user);
    });
  }

  createComp(container, element, data) {
    const parent = document.querySelector(container);
    const el = document.createElement(element);
    el.props = data;
    parent.appendChild(el);
  }

  render() {
    this.innerHTML = `        
        <header>
            <h1>Teste easynvest</h1>
        </header>
        <div class="list-container"></div>
    `;
    this.createList();

    this.createComp("header", "ez-button", {
      title: "Adicionar usuário",
      class: "xl",
      icon: "icon-add",
      action: () =>
        this.createComp("ez-app", "modal-form", {
          createComp: this.createComp,
          update: false,
          refresh: () => this.connectedCallback(),
        }),
    });
  }
}

customElements.define("ez-app", App);
