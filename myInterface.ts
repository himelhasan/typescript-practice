interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, off: number): number;
}

const himel: User = {
  dbId: 34,
  email: "me@example.com",
  userId: 34,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Himel10", off = 4) => {
    return 10;
  },
};

himel.email = "h@h.com";
