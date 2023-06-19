"use strict";
console.log("ts is here");
console.log("ts is awesome");
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Dhaka";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Dhaka";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (value <= 1) {
            throw new Error(`Course count should
       be more than 1 `);
        }
        this._courseCount = value;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const himel = new User("h@h.com", "himel");
// himel.city;
// himel.deleteToken();
