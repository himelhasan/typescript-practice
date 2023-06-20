interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createdTime: string;
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {}
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string,
    public createdTime: string
  ) {}

  createStory(): void {
    console.log("Story created");
  }
}
