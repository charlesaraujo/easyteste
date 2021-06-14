import Mask from "../../services/mask/mask.service";
import Data from "../../services/data.service";
import Validator from "../../services/validator.service";
import WebComponent from "../../services/webcomponent.service";
import "./modalForm.component.scss";

class ModalForm extends HTMLElement {
  constructor() {
    super();
    this.data = new Data();
    this.wc = new WebComponent();
    this.masks = new Mask();
    this.validator = new Validator();
    this.formValid;
  }
  connectedCallback() {
    this.formValid = {
      name: this.props.update,
      cpf: this.props.update,
      email: this.props.update,
      phone: this.props.update,
    };
    this.render();
    this.setupValidatorsAndMasks();
  }

  dinamicValidationAndMasks(name) {
    const element = this.querySelector(`#${name}`);
    const errorLabel = this.querySelector(`#error-${name}`);
    element.onkeyup = (e) => {
      if (name == "phone" || name == "cpf") {
        e.target.value = this.masks[name](e.target.value);
      }
      let isValid = this.validator[name](element.value);
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
    if (name && cpf && email && phone) {
      btn.removeAttribute("disabled");
      return true;
    }
    btn.setAttribute("disabled", "true");
    return false;
  }

  close() {
    this.props.refresh();
  }

  formData() {
    return {
      cpf: this.masks.clear(this.querySelector("#cpf").value),
      email: this.querySelector("#email").value,
      name: this.querySelector("#name").value,
      phone: this.masks.clear(this.querySelector("#phone").value),
    };
  }

  saveUser() {
    const userData = this.formData();
    this.data.addUser(userData);
    setTimeout(() => this.props.refresh(), 1000);
  }
  updateUser() {
    const userData = this.formData();
    this.data.updateUser({
      index: this.props.user.index,
      ...userData,
    });
    setTimeout(() => this.props.refresh(), 1000);
  }

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
                <input type="text" name="name" id="name" 
                placeholder="digite seu nome" ${
                  this.props.update ? `value='${this.props.user.name}'` : ""
                }>
                <label for="name">Nome completo (sem abreviações)</label>
              </div>
              <span id="error-name" class="error">Campo deve ter 3 caracteres ou mais</span>
    
              <div class="field">
                <input type="email" name="email" id="email" 
                placeholder="digite seu email" ${
                  this.props.update ? `value='${this.props.user.email}'` : ""
                }>
                <label for="email">E-mail</label>
              </div>
              <span id="error-email" class="error">Email inválido</span>

              <div class="field">
                <input type="text" name="cpf" id="cpf" 
                placeholder="digite seu cpf" ${
                  this.props.update
                    ? `value='${this.masks.cpf(this.props.user.cpf)}'`
                    : ""
                }>
                <label for="cpf">CPF</label>
              </div>
              <span id="error-cpf" class="error">CPF inválido</span>

              <div class="field">
                <input type="text" name="phone" id="phone" 
                placeholder="digite seu telefone" ${
                  this.props.update
                    ? `value='${this.masks.phone(this.props.user.phone)}'`
                    : ""
                }>
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

    this.wc.create(".modal-header", "ez-button", {
      title: "",
      class: "sm danger",
      icon: "icon-close",
      action: () => this.close(),
    });

    this.wc.create(".modal-footer", "ez-button", {
      title: this.props.update ? "Atualizar usuário" : "Cadastrar usuário",
      class: "xl",
      action: this.props.update
        ? () => this.updateUser()
        : () => this.saveUser(),
      disabled: !this.props.update,
      showLoader: true,
      blockedColor: "var(--success)",
    });
  }
}

customElements.define("modal-form", ModalForm);
