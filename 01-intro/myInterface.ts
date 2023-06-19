interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, off: number): number;
}

// reopening of the interface

interface User {
  githubId: string;
}

interface Admin extends User {
  role: "admin" | "editor" | "learner";
}

const himel: Admin = {
  dbId: 34,
  role: "admin",
  email: "me@example.com",
  userId: 34,
  githubId: "fgesd345wr90d",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Himel10", off = 4) => {
    return 10;
  },
};

himel.email = "h@h.com";
