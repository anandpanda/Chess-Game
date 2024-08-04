# Chess Game

## Overview

This is a simple live chess game where two players can play against each other while other users can join as spectators. The game is built using `socket.io`, `Node.js`, `EJS`, `Express`, and the `chess.js` engine.

## Preview :

### Demo -
https://github.com/user-attachments/assets/73502a43-e711-41bf-9332-d95a9f2d6271

### Player 1 -
![Player 1](https://github.com/user-attachments/assets/5cb37690-b535-4acb-ae95-63deb50d1861)

### Player 2 -
![Player 2](https://github.com/user-attachments/assets/10cea6c2-de4f-46dc-a450-65f90ec14102)

### Spectator -
![Spectator](https://github.com/user-attachments/assets/dfb5c18d-93d3-44c0-b547-aa32ead5e234)

## Features

- **Two-player live chess game**: Two users can play chess in real-time.
- **Spectator mode**: Additional users can join and watch the game live.
- **Real-time updates**: Moves are updated live for all players and spectators.
- **Chess logic**: Utilizes the `chess.js` library for move validation and game state management.

## Technologies Used

- **Socket.io**: For real-time bidirectional communication between the server and clients.
- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **EJS**: Embedded JavaScript templates for rendering views.
- **Chess.js**: JavaScript chess engine for validating moves and managing game state.
  
## Installation

   ```bash
   git clone https://github.com/anandpanda/Chess-Game.git
   cd Chess-Game
   pnpm install or npm install
   pnpm start or npm start
   Open your browser and navigate to http://localhost:3000 to start playing.
   ```
## Usage
- **Player Mode:** The first two users to join the game will be assigned as players.
- **Set Assigment:** First player to join will be assigned the white set, other the black.
- **Spectator Mode:** Any additional users will join as spectators and can watch the game live.



