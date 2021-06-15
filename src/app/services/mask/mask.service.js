class Mask {
  phone(number) {
    if (!number) return "";
    return number
      .toString()
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  }
  cpf(value) {
    if (!value) return "";
    return value
      .toString()
      .replace(/\D+/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }
  clear(value) {
    if (!value) return "";
    return value.toString().replace(/\D+/g, "");
  }
}
export default Mask;
