const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const port = process.env.PORT || 3000;
const world = require("./player_state");
//getting the express function
const app = express();

//creating the server
const server = http.createServer(app);

//initating the folder
const clientPath = `${__dirname}/../client`;

app.use(express.static(clientPath));

const io = socketio(server);

io.on("connection", (client) => {
  console.log("A user joined");

  //happens when the user joins the game.
  client.on("join", (text) => {
    client.emit("join", text);
  });

  //when the user enters the game
  client.on("entergame", (text) => {
    io.emit("entergame", text);
  });

  //when the user is chatting
  client.on("typing", (text) => {
    io.emit("typing", text);
  });

  //making the users see each other
  let id = client.id;
  world.addPlayer(id);

  //creating the player connection
  let player = world.playerForId(id);
  client.emit("createPlayer", player);

  //brodcasting the other player
  client.broadcast.emit("addOtherPlayer", player);

  client.on("requestOldPlayers", function () {
    for (let i = 0; i < world.players.length; i++) {
      if (world.players[i].playerId != id)
        client.emit("addOtherPlayer", world.players[i]);
    }
  });

//updating the position of the player
  client.on("updatePosition", function (data) {
    let newData = world.updatePlayerData(data);
    client.broadcast.emit("updatePosition", newData);
  });

  //when the user leaves
  client.on("disconnect", (client) => {
    console.log("a user left");
    io.emit("LeaveGame", "someone left the game");
    //removing the player when they leave
    io.emit("removeOtherPlayer", player);
    world.removePlayer(player);
  });
});

// when an error happens on the server
server.on("error", (err) => {
  console.error("An error Happened please fix it and try again" + err);
});

//letting the server listen on a port
server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
