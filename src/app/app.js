import Data from "./services/data/data.service";
import WebComponent from "./services/webcomponent/webcomponent.service";
import "./components/listItem/listItem.component";
import "./components/button/button.component";
import "./components/modalForm/modalForm.component";
import "./app.scss";

class App extends HTMLElement {
  constructor() {
    super();
    this.wc = new WebComponent();
    this.data = new Data();
    this.users = [];
  }
  async connectedCallback() {
    this.users = await this.data.getFisrtData();
    this.render();
  }

  createList() {
    this.users.forEach((user, index) => {
      this.wc.create(".list-container", "list-item", {
        user,
        index,
        refresh: () => this.connectedCallback(),
      });
    });
  }

  render() {
    this.innerHTML = `
        <header>
            <h1>Teste easynvest</h1>
        </header>
        <div class="list-container"></div>
    `;

    this.createList();

    this.wc.create(this.querySelector("header"), "ez-button", {
      title: "Adicionar usuário",
      class: "xl",
      icon: "icon-add",
      action: () =>
        this.wc.create(this, "modal-form", {
          update: false,
          refresh: () => this.connectedCallback(),
        }),
    });
  }
}

customElements.define("ez-app", App);
