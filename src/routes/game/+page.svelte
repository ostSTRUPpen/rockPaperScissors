<script lang="ts">
	import { onMount } from 'svelte';
	import { Entity } from '../../lib/classes/entity';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

		const circle = new Entity(50, 50, 'rock');
		circle.display(ctx);
		while (true) {
			ctx?.clearRect(0, 0, canvas.width, canvas.height);
			circle.move();
			circle.display(ctx);
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	});
</script>

<div>
	<canvas bind:this={canvas} width="500" height="500" />
</div>

<style>
	canvas {
		border: 1px solid #000000;
	}
</style>
