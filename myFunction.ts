function addTwo(num: number): number {
  return num + 2;
}

function getUpper(value: string): string {
  return value.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

function getValue(myVal: number): boolean {
  if (myVal > 5) {
    return true;
  } else return false;
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", " ironman"];
const allHeros = ["thor", "spiderman", " ironman"];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(message: string): void {
  console.log(message);
}
function handleError(message: string): void {
  console.log(message);
}

function fail(msg: string): never {
  throw new Error(msg);
}

addTwo(5);
getUpper("hey bro");
signUp("Himel", "himel@coderscrown.com", true);
loginUser("h", "h@h.com");

export {};
