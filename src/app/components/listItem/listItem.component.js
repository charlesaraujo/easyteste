import Mask from "../../services/mask.service";
import "./listItem.component.scss";
class ListItem extends HTMLElement {
  constructor() {
    super();
    this.masks = new Mask();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="list-item">
        <div class="content">
            <h2>${this.props.name}</h2>
            <div class="info">
                <p><span>CPF:</span> ${this.masks.cpf(this.props.cpf)} </p>
                <p><span>Telefone:</span> ${this.masks.phone(
                  this.props.phone
                )} </p>
                <p><span>E-mail:</span> ${this.props.email} </p>
            </div>
        </div>    
        <div class="actions">
            <button>aa</button>
        <div>
    </div>
    `;
  }
}

customElements.define("list-item", ListItem);
