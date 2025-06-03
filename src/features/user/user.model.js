export default class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static getAll() {
        return users;
    }
    static signUp(name, email, password) {
        const newUser = new UserModel(users.length + 1, name, email, password);
        users.push(newUser);
        return newUser;
    }
    static signIn(email, password) {
        return users.find(u => u.email === email && u.password === password);
    }
}

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        password: "password"
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        password: "password"
    }
];
