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
