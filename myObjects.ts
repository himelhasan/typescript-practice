const userA = {
  name: "himel",
  email: "himel@gmail.com",
  isActive: false,
};

const createCourse = (): {} => {
  return {};
};

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number;
};

const createUser = (user: User): User => {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
};
createUser({
  _id: "asdf",
  name: "himel",
  email: "ftg",
  isActive: false,
});

export {};
