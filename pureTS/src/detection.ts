function detectType(val: string | number) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function providedId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// in operator narrowing

function isAdmin(user: User | Admin): boolean {
  if ("isAdmin" in user) {
    return user.isAdmin;
  }
  return false;
}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
