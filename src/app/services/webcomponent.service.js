class WebComponent {
  create(parent, element, data, callback) {
    console.log(parent, element, data, callback);
    const pr =
      typeof parent == "object" ? parent : document.querySelector(parent);

    const el = document.createElement(element);
    el.props = data;
    pr.appendChild(el);

    if (callback) callback();

    return true;
  }
}
export default WebComponent;
