abstract class TakeAPhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // calculation
    return 8;
  }
}

class Pinterest extends TakeAPhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const hc = new Pinterest("test", "test");
