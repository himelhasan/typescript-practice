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

interface Circle {
  kind: "Circle";
  radius: number;
}
interface Square {
  kind: "Square";
  side: number;
}

interface Rectangle {
  kind: "Rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "Circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side;
}

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "Circle":
      return Math.PI * shape.radius ** 2;
    case "Square":
      return shape.side * shape.side;
    case "Rectangle":
      return shape.width * shape.length;
    default:
      const extraCheck: never = shape;
      return extraCheck;
  }
};
