export class Entity {
	x: number;
	y: number;
	type: string;
	maxMovement = 5;
	minMovement = -5;
	constructor(x: number, y: number, type: string) {
		this.x = x;
		this.y = y;
		this.type = type;
	}
	display(ctx: CanvasRenderingContext2D | null) {
		if (ctx === null) return Error('No context');
		ctx.beginPath();
		ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI);
		ctx.stroke();
		return;
	}
	move() {
		this.x =
			this.x + Math.floor(Math.random() * (this.maxMovement - this.minMovement) + this.minMovement);
		this.y =
			this.y + Math.floor(Math.random() * (this.maxMovement - this.minMovement) + this.minMovement);
	}
}
