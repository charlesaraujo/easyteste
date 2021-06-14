class Validator {
  name(val) {
    return val.length > 3;
  }
  cpf(val) {
    return val.replace(/\D+/g, "").length > 10;
  }
  phone(val) {
    return val.replace(/\D+/g, "").length > 9;
  }
  email(val) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(val);
  }
}
export default Validator;
