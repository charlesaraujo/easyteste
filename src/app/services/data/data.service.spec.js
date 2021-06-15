import Data from "./data.service";

const mockBase = () => [
  {
    name: "My name 1",
    cpf: "04080757247",
    phone: "11987654321",
    email: "myemail1@test.com.br",
  },
  {
    name: "My name 2",
    cpf: "77797584192",
    phone: "11987654321",
    email: "myemail2@test.com.br",
  },
  {
    name: "My name 3",
    cpf: "45486737688",
    phone: "11987654321",
    email: "myemail3@test.com.br",
  },
  {
    name: "My name 4",
    cpf: "74668869066",
    phone: "11987654321",
    email: "myemail4@test.com.br",
  },
];
const user = {
  name: "My name 5",
  cpf: "74668869066",
  phone: "11987654321",
  email: "myemail4@test.com.br",
};

let mock;

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockBase()) })
);

global.localStorage = {
  getItem: () => JSON.stringify(mock),
  setItem: (db, users) => (mock = users),
};

describe("Data", () => {
  let data = new Data();

  beforeEach(() => {
    mock = mockBase();
  });
  it("getFisrtData: expect to return same data as mock", async () => {
    expect(await data.getFisrtData()).toMatchObject(mock);
    mock = null;
    expect(await data.getFisrtData()).toBe(mock);
  });

  it("fetchData: expect to return same data as mock", async () => {
    expect(await data.fetchData()).toMatchObject(mock);
  });

  it("getUsers: expect to return same data as mock", () => {
    expect(data.getUsers()).toMatchObject(mock);
    mock = null;
    expect(data.getUsers()).toMatchObject([]);
  });

  it("setUsers: expect to get same data as getUsers after set", () => {
    data.setUsers([user]);
    expect(mock).toBe(data.getUsers());
    expect(data.setUsers()).toBe(null);
  });

  it("addUser: expect to get same data as mock after add", () => {
    data.addUser(user);
    expect(mock).toBe(data.getUsers());
    expect(data.addUser()).toBe(null);
  });

  it("deleteUser: expect to get same data as mock after delete", () => {
    data.deleteUser(0);
    expect(mock).toBe(data.getUsers());
    expect(data.deleteUser()).toBe(null);
  });

  it("updateUser: expect to get same data as mock after update", () => {
    data.updateUser({ index: 0, ...user });
    expect(mock).toBe(data.getUsers());
    expect(data.updateUser()).toBe(null);
  });
});
