const sock = io();

function writeevent(text) {
  log(text);
}

//happens when the user connects to the game
sock.on("join", writeevent);
// happens when the user joins the game
sock.on("entergame", writeevent);
//happens when user leaves game
sock.on("LeaveGame", writeevent);
//happens when users are chatting
sock.on("typing", writeevent);
//shows the player when they connect
sock.on("connect", function () {
  sock.emit("requestOldPlayers", {});
});
//happens when user moves
//it updates the players position
sock.on("updatePosition", function (data) {
  updatePlayerPosition(data);
});
//creates player every time someone joins
sock.on("createPlayer", function (data) {
  createPlayer(data);
});
//adds player when someone joins
sock.on("addOtherPlayer", function (data) {
  addOtherPlayer(data);
});
//removes player when someone leaves the game
sock.on("removeOtherPlayer", function (data) {
  removeOtherPlayer(data);
});
