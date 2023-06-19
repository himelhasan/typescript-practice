let score: number | string = 33;

score = "55";
score = 5;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let himel: User | Admin = {
  name: "John",
  id: 3,
};

himel = {
  username: "John",
  id: 3,
};

const getUserId = (user: number | string) => {
  if (typeof user === "string") {
    return user.toLocaleUpperCase();
  }
  return user + 2;
};

const data1: number[] = [2, 2, 2];
const data2: string[] = ["himel", "anny", "afra"];
const data3: (number | string)[] = ["himel", 3];

type airplaneSeatType = "aisle" | "middle" | "window";

const mySeatType: airplaneSeatType = "aisle";
const myWifeSeatType: airplaneSeatType = "window";

export {};
