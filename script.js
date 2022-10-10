const resolution = 480;

const grid = document.querySelector('.grid');
grid.style.width = `${resolution}px`;

const changeCanvasSizeButton = document.querySelector('.change-canvas-size');
const canvasSizeText = document.querySelector('.canvas-size');

function createCanvas(size) {
	for(let i = 0; i < size; i++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for(let j = 0; j < size; j++) {
			const square = document.createElement('div');
			
			square.style.width = `${resolution / size}px`;
			square.style.height = `${resolution / size}px`;

			square.addEventListener('mouseover', () => square.style.backgroundColor = 'black');

			row.appendChild(square);
		}
		grid.appendChild(row);
	}
	canvasSizeText.textContent = `Canvas size: ${size}x${size}`;
}

createCanvas(16);

changeCanvasSizeButton.addEventListener('click', () => {
	while(grid.firstChild) {
		grid.removeChild(grid.firstChild);
	}
	let newSize;
	do {
		newSize = Number(prompt('Please enter the new canvas size(1-100):'));
	} while(newSize < 1 || newSize > 100 );
	createCanvas(newSize);
});
