let pieces = document.querySelectorAll(".puzzle-piece");
let container = document.getElementById("puzzle-container");

// Set the background images for each puzzle piece
pieces.forEach(piece => {
	let num = Math.floor(Math.random() * 3) + 1;
	piece.style.backgroundImage = `url('puzzle${num}.jpg')`;
});

// Shuffle the puzzle pieces
function shuffle() {
	for (let i = container.children.length; i >= 0; i--) {
		container.appendChild(container.children[Math.random() * i | 0]);
	}
}
