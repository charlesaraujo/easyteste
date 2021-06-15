class WebComponent {
  create(parent, element, data) {
    if (!parent || !element) return null;
    const pr =
      typeof parent == "object" ? parent : document.querySelector(parent);

    const el = document.createElement(element);
    el.props = data;
    pr.appendChild(el);
  }
}
export default WebComponent;
