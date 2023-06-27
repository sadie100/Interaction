import Point from "./Point";

export class Wave {
  stageWidth?: number;
  stageHeight?: number;
  centerX?: number;
  centerY?: number;
  point?: Point;

  constructor() {}

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.init();
  }

  init() {
    if (this.centerX !== undefined && this.centerY !== undefined) {
      this.point = new Point(this.centerX, this.centerY);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";

    if (!!this.point) {
      this.point.update();
      ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    }
    ctx.fill();
  }
}
