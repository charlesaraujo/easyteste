import Data from "../../services/data/data.service";
import WebComponent from "../../services/webcomponent/webcomponent.service";
import Mask from "../../services/mask/mask.service";
import "./listItem.component.scss";
class ListItem extends HTMLElement {
  constructor() {
    super();
    this.wc = new WebComponent();
    this.masks = new Mask();
    this.data = new Data();
  }
  connectedCallback() {
    this.render();
  }
  deleteUser(index) {
    this.data.deleteUser(index);
    setTimeout(() => this.props.refresh(), 100);
  }
  render() {
    this.innerHTML = `
    <div class="list-item">
        <div class="content">
            <h2>${this.props.user.name}</h2>
            <div class="info">
                <p><span>CPF:</span> ${this.masks.cpf(this.props.user.cpf)} </p>
                <p><span>E-mail:</span> ${this.props.user.email} </p>
                <p><span>Telefone:</span> ${this.masks.phone(
                  this.props.user.phone
                )} </p>
                
            </div>
        </div>    
        <div class="actions">
            
        </div>
    </div>
    `;

    this.wc.create(this.querySelector(".actions"), "ez-button", {
      title: "",
      class: "sm purple",
      icon: "icon-edit",
      action: () =>
        this.wc.create("ez-app", "modal-form", {
          update: true,
          user: { ...this.props.user, index: this.props.index },
          refresh: () => this.props.refresh(),
        }),
      blockedColor: "var(--colors-purple)",
    });

    this.wc.create(this.querySelector(".actions"), "ez-button", {
      title: "",
      class: "sm danger",
      icon: "icon-close",
      action: () => this.deleteUser(this.props.index),
      blockedColor: "var(--danger)",
    });
  }
}

customElements.define("list-item", ListItem);
