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
    if (!users) return null;
    return JSON.parse(users);
  }

  setUsers(users) {
    localStorage.setItem(this.db, JSON.stringify(users));
  }

  addUser(user) {
    const users = this.getUsers();
    users.push(user);
    this.setUsers(users);
  }
}
export default Data;
