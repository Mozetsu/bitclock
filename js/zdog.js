let isSpinning = true;

let illo = new Zdog.Illustration({
	element: '.zdog-canvas',
	dragRotate: true,
	// stop spinning when drag starts
	onDragStart: function () {
		isSpinning = true;
	},
});

// ----- cube ----- //
var cube = new Zdog.Box({
	addTo: illo,
	width: 15,
	height: 15,
	depth: 15,
	rotate: { y: 10, z: 10 },
	topFace: '#ffa4ba',
	frontFace: '#ffa4ba',
	leftFace: '#ffa4ba',
	rightFace: '#ffa4ba',
	rearFace: '#ffa4ba',
	bottomFace: '#ffa4ba',
	stroke: true,
});

function animate() {
	illo.rotate.y += isSpinning ? 0.03 : 0;
	illo.updateRenderGraph();
	requestAnimationFrame(animate);
}
animate();
