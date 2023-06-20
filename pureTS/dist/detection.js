"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function providedId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
// in operator narrowing
function isAdmin(user) {
    if ("isAdmin" in user) {
        return user.isAdmin;
    }
    return false;
}
function getTrueShape(shape) {
    if (shape.kind === "Circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "Square") {
        return shape.side * shape.side;
    }
    return shape.width * shape.length;
}
const getArea = (shape) => {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "Square":
            return shape.side * shape.side;
        case "Rectangle":
            return shape.width * shape.length;
        default:
            const extraCheck = shape;
            return extraCheck;
    }
};
