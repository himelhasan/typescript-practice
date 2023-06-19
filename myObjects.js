"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userA = {
  name: "himel",
  email: "himel@gmail.com",
  isActive: false,
};
var createCourse = function () {
  return {};
};
var createUser = function (user) {
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

type cardDate = {
  cardDate: String,
};

type cardNumber = {
  cardNumber: Number,
};

type cardDetails = cardDate &
  cardNumber & {
    cvv: Number,
  };
