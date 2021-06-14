import Mask from "../../services/mask.service";
import Data from "../../services/data.service";
import Validator from "../../services/validator.service";
import "./modalForm.component.scss";

class ModalForm extends HTMLElement {
  constructor() {
    super();
    this.data = new Data();
    this.masks = new Mask();
    this.validator = new Validator();
    this.formValid = { name: false, cpf: false, email: false, phone: false };
  }
  connectedCallback() {
    this.render();
    this.setupValidatorsAndMasks();
  }

  setupMasks() {
    this.querySelector("#phone").onkeyup = (e) => {};
    this.querySelector("#cpf").onkeyup = (e) => {
      e.target.value = this.masks.cpf(e.target.value);
    };
  }

  dinamicValidationAndMasks(name) {
    const element = this.querySelector(`#${name}`);
    const errorLabel = this.querySelector(`#error-${name}`);
    element.onkeyup = (e) => {
      if (name == "phone" || name == "cpf") {
        e.target.value = this.masks[name](e.target.value);
      }
      let isValid = this.validator[name](e.target.value);
      if (!isValid) {
        element.setCustomValidity("Invalid field.");
        errorLabel.style.visibility = "visible";
      } else {
        element.setCustomValidity("");
        errorLabel.style.visibility = "hidden";
      }
      this.formValid[name] = isValid;
      this.isFormValid();
    };
  }
  setupValidatorsAndMasks() {
    this.dinamicValidationAndMasks("name");
    this.dinamicValidationAndMasks("email");
    this.dinamicValidationAndMasks("cpf");
    this.dinamicValidationAndMasks("phone");
  }

  isFormValid() {
    const { name, cpf, email, phone } = this.formValid;
    const btn = this.querySelector(".modal-footer .btn");
    const hasDisable = btn.hasAttribute("disabled");
    if (name && cpf && email && phone) {
      hasDisable ? btn.removeAttribute("disabled") : null;
      return true;
    }
    !hasDisable ? btn.setAttribute("disabled", "true") : null;
    return false;
  }

  close() {
    const modal = document.querySelector("modal-form");
    modal.parentElement.removeChild(modal);
  }

  saveUser() {
    const cpf = this.masks.clear(this.querySelector("#cpf").value);
    const email = this.querySelector("#email").value;
    const name = this.querySelector("#name").value;
    const phone = this.masks.clear(this.querySelector("#phone").value);
    this.data.addUser({ name, phone, email, cpf });
    setTimeout(() => this.props.refresh(), 2000);
  }
  updateUser() {}

  render() {
    this.innerHTML = `
      <div class="modal-form">
        <div class="modal-content">
          <div class="modal-header">
            <h3>${this.props.update ? "Atualizar" : "Cadastrar"} usuário</h3>
          </div>

          <div class="modal-body">
            <form>
             
              <div class="field">
                <input type="text" name="name" id="name" placeholder="digite seu nome">
                <label for="name">Nome completo (sem abreviações)</label>
              </div>
              <span id="error-name" class="error">Campo deve ter 3 caracteres ou mais</span>
    
              <div class="field">
                <input type="email" name="email" id="email" placeholder="digite seu email">
                <label for="email">E-mail</label>
              </div>
              <span id="error-email" class="error">Email inválido</span>

              <div class="field">
                <input type="text" name="cpf" id="cpf" placeholder="digite seu cpf">
                <label for="cpf">CPF</label>
              </div>
              <span id="error-cpf" class="error">CPF inválido</span>

              <div class="field">
                <input type="text" name="phone" id="phone" placeholder="digite seu telefone">
                <label for="phone">Telefone</label>
              </div>
              <span id="error-phone" class="error">Telefone inválido</span>

            </form>
          </div>

          <div class="modal-footer">
          </div>
        </div>
      </div>
    `;
    this.props.createComp(".modal-header", "ez-button", {
      title: "",
      class: "transparent",
      icon: "icon-close",
      action: this.close,
    });

    this.props.createComp(".modal-footer", "ez-button", {
      title: this.props.update ? "Atualizar usuário" : "Cadastrar usuário",
      class: "xl",
      action: this.props.update
        ? () => this.updateUser()
        : () => this.saveUser(),
      disabled: this.props.update ? false : true,
      showLoader: true,
    });
  }
}

customElements.define("modal-form", ModalForm);
