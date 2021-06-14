import "./button.component.scss";
class Button extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <button class="btn ${this.props.class}" ${
      this.props.disabled ? "disabled" : ""
    }>
           ${this.props.title ? `<span>${this.props.title}</span>` : ""}
           ${this.props.icon ? `<i class="${this.props.icon}"></i>` : ""}
        </button>
    `;
    if (this.props.action) {
      const button = this.querySelector("button");
      button.addEventListener("click", (e) => {
        this.props.action();
        if (this.props.showLoader) {
          console.log("jooas");
          button.setAttribute("disabled", "true");
          button.innerHTML = '<div class="loader"></div>';
          button.style.backgroundColor = "var(--success)";
        }
      });
    }
  }
}

customElements.define("ez-button", Button);
