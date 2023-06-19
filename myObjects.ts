const userA = {
  name: "himel",
  email: "himel@gmail.com",
  isActive: false,
};

const createCourse = (): {} => {
  return {};
};

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const createUser = (user: User): User => {
  return {
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
};
createUser({
  name: "himel",
  email: "ftg",
  isActive: false,
});

export {};
