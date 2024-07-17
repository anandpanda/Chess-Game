const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const { Chess } = require("chess.js");

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "w";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("index", { title: "Chess" });
});

io.on("connection", function (uniqueSocket) {
	console.log("A user connected");

	if (!players.white) {
		players.white = uniqueSocket.id;
		uniqueSocket.emit("playerRole", "w");
	} else if (!players.black) {
		players.black = uniqueSocket.id;
		uniqueSocket.emit("playerRole", "b");
	} else {
		uniqueSocket.emit("spectatorRole");
	}

	uniqueSocket.on("disconnect", function () {
		console.log("A user disconnected");
		if (players.white === uniqueSocket.id) {
			delete players.white;
		} else if (players.black === uniqueSocket.id) {
			delete players.black;
		}
	});

	uniqueSocket.on("move", (move) => {
		try {
			if (chess.turn() === "w" && players.white !== uniqueSocket.id)
				return;
			if (chess.turn() === "b" && players.black !== uniqueSocket.id)
				return;

			const result = chess.move(move);
			if (result) {
				currentPlayer = chess.turn();
				io.emit("move", move);
				io.emit("boardState", chess.fen());
			} else {
				console.log("Invalid move: ", move);
				uniqueSocket.emit("invalidMove", move);
			}
		} catch (error) {
			console.log("Invalid move: ", move.from, move.to);
			uniqueSocket.emit("invalidMove", move);
		}
	});
});

const PORT = process.env.PORT || 3000;

server.listen(PORT || 3000, () => {
	console.log(`Server is running on port ${PORT}`);
});
