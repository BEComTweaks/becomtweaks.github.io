// Array of textures
const textures = [
  {
    src: "dirt/0.png",
  },
  {
    src: "dirt/1.png",
  },
  {
    src: "dirt/2.png",
  },
  {
    src: "dirt/3.png",
  },
  {
    src: "dirt/4.png",
  },
  {
    src: "dirt/5.png",
  },
  {
    src: "dirt/6.png",
  },
  {
    src: "dirt/7.png",
  },
  {
    src: "dirt/8.png",
  },
  {
    src: "dirt/9.png",
  },
  {
    src: "dirt/10.png",
  },
  {
    src: "dirt/11.png",
  },
  {
    src: "dirt/12.png",
  },
  {
    src: "dirt/13.png",
  },
  {
    src: "dirt/14.png",
  },
  {
    src: "dirt/15.png",
  },
];

// Function to select a texture with equal probability
function selectTexture() {
  const index = Math.floor(Math.random() * textures.length);
  return textures[index].src;
}

// Function to create tiles with random background images
function createTiles() {
  const container = document.getElementById("background-container");
  const numColumns = Math.ceil(window.innerWidth / 100) + 2;
  const numRows = Math.ceil(window.innerHeight / 100) + 2;

  container.innerHTML = "";

  for (let i = 0; i < numColumns; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row"; // Add a class for styling purposes if needed

    for (let j = 0; j < numRows; j++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.style.backgroundImage = `url("${selectTexture()}")`;
      rowDiv.appendChild(tile);
    }

    container.appendChild(rowDiv);
  }
}

// Call the function to create tiles
createTiles();

// Redraw tiles on window resize to maintain the grid
window.addEventListener("resize", () => {
  document.getElementById("background-container").innerHTML = "";
  createTiles();
});
