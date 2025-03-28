import "./reset.css";
import "./style.css";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Ship } from "./Ship";
import { createGrid } from "./createGrid";

const player1Area = document.getElementById("player1-area")
const player2Area = document.getElementById("player2-area")
const grid = createGrid();
const grid2 = createGrid();
player1Area.appendChild(grid)
player2Area.appendChild(grid2)

// player1Area.classList.toggle("visible")