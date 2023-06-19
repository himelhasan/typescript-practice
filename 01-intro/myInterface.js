var himel = {
    dbId: 34,
    email: "me@example.com",
    userId: 34,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        if (off === void 0) { off = 4; }
        return 10;
    },
};
himel.email = "h@h.com";
