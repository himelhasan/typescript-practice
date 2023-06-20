"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, short, createdTime) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
        this.createdTime = createdTime;
    }
    createStory() {
        console.log("Story created");
    }
}
