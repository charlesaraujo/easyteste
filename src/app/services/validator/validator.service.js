class Validator {
  name(val) {
    if (!(val || val === 0)) return false;
    return val.toString().length > 3;
  }
  cpf(val) {
    if (!(val || val === 0)) return false;
    return val.toString().replace(/\D+/g, "").length > 10;
  }
  phone(val) {
    if (!(val || val === 0)) return false;
    return val.toString().replace(/\D+/g, "").length > 9;
  }
  email(val) {
    if (!(val || val === 0)) return false;
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(val.toString());
  }
}
export default Validator;
