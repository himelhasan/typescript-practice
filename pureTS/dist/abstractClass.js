"use strict";
class TakeAPhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // calculation
        return 8;
    }
}
class Pinterest extends TakeAPhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("sepia");
    }
}
const hc = new Pinterest("test", "test");
