class Data {
  constructor() {
    this.db = "easy-db";
    this.url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";
  }

  async getFisrtData() {
    const data = this.getUsers();
    if (!data || !data.length) {
      const users = await this.fetchData();
      this.setUsers(users);
    }
    return this.getUsers();
  }

  async fetchData() {
    const data = await fetch(this.url);
    return await data.json();
  }

  getUsers() {
    const users = localStorage.getItem(this.db);
    return JSON.parse(users) || [];
  }

  setUsers(users) {
    if (!users) return null;
    localStorage.setItem(this.db, JSON.stringify(users));
  }

  addUser(user) {
    if (!user || !user.name) return null;
    const users = this.getUsers();
    users.push(user);
    this.setUsers(users);
  }

  deleteUser(index) {
    if (!(index || index === 0)) return null;
    const users = this.getUsers();
    users.splice(index, 1);
    this.setUsers(users);
  }
  updateUser(user) {
    if (!user) return null;
    const users = this.getUsers();
    users[user.index].name = user.name;
    users[user.index].email = user.email;
    users[user.index].cpf = user.cpf;
    users[user.index].phone = user.phone;
    this.setUsers(users);
  }
}
export default Data;
