const score: Array<number> = [];
const names: Array<string> = [];

function one(val: number | string): number | string {
  return val;
}

function two(val: any): any {
  return val;
}

function three<Type>(val: Type): Type {
  return val;
}

three(true);

function four<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  price: number;
}

four<Bottle>({ brand: "Pran", price: 234 });

function getSearchProducts<T>(products: T[]): T {
  // database functions
  const myIndex = 3;
  return products[myIndex];
}

const getProducts = <T>(products: T[]): T => {
  return products[0];
};

interface Database {
  connection: string;
  usernames: string;
  passwords: string;
}

function anotherFunction<T, U extends Database>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

anotherFunction(3, {
  connection: "string",
  usernames: "string",
  passwords: "string",
});
