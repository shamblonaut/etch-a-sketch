const resolution = 480;

const grid = document.querySelector('.grid');
grid.style.width = `${resolution}px`;

const changeCanvasSizeButton = document.querySelector('.change-canvas-size');
const canvasSizeText = document.querySelector('.canvas-size');

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCanvas(size) {
	for(let i = 0; i < size; i++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for(let j = 0; j < size; j++) {
			const square = document.createElement('div');
			
			square.style.width = `${resolution / size}px`;
			square.style.height = `${resolution / size}px`;

			let opacity = 255;

			square.addEventListener('mouseover', () => {
				let red = random(0, opacity);
				let green = random(0, opacity);
				let blue = random(0, opacity);
				square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
				if(opacity > 0) {
					opacity -= 28;
				}
			});

			row.appendChild(square);
		}
		grid.appendChild(row);
	}
	canvasSizeText.textContent = `Canvas size: ${size}x${size}`;
}

createCanvas(16);

changeCanvasSizeButton.addEventListener('click', () => {
	let newSize;
	do {
		newSize = Number(prompt('Please enter the new canvas size(1-100):'));
	} while(newSize < 1 || newSize > 100 );

	while(grid.firstChild) {
		grid.removeChild(grid.firstChild);
	}
	createCanvas(newSize);
});
