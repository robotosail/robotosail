// //"use strict";
//    let moveForward = false;
//     let moveBackward = false;
//     let moveLeft = false;
//   let  moveRight = false;
//     let canJump = false;
//     let crouch = false;
//      let movespeed = 0.4;
//      let jumpspeed = 1;
//      let jumpHeight = 17;

//    // // creates a function for movement
//      let btn = document.getElementById("button");

//     btn.addEventListener("click", ()=>{
//       controls.lock();

//     const move = function (e) {
//       // alert(e.keyCode);
//           switch (e.keyCode) {
//         case 87: // w
//         case 38: // up
//             moveForward = true;
//             break;
//         case 65: // a
//         case 37: // left
//             moveRight = true;
//             break;
//         case 83: // s
//         case 40: // back
//             moveBackward = true;
//             break;
//         case 68: // d
//         case 39: // right
//             moveLeft = true;
//             break;
//          case 16: //shift
//             crouch = true;
//             break;
//         case 32: // space
//             canJump = true;
//             break;
//     }

// };

// const move2 = function (e) {
//           switch (e.keyCode) {
//         case 87: // w
//         case 38: // up
//             moveForward = false;
//             break;
//         case 65: // a
//         case 37: // left
//             moveRight = false;
//             break;
//         case 83: // s
//         case 40: // back
//             moveBackward = false;
//             break;
//         case 68: // d
//         case 39: // right
//             moveLeft = false;
//             break;
//         case 32: // space
//             canJump = false;
//             break;
//        case 16: // shift
//             crouch = false;
//             break;
//     }

// };

// function detectcontrols(){
//   if(moveForward){
//     controls.moveForward(movespeed);
//   }
//   if(moveBackward){
//     controls.moveForward(-movespeed);
//   }
//   if(moveRight){
//     controls.moveRight(movespeed);
//   }
//   if(moveLeft){
//     controls.moveRight(-movespeed);
//   }
//   // allows the player to jump
//     if(canJump && camera.position.y >= -jumpHeight){
//     camera.position.y -= jumpspeed;

//   }//to make the player come back down after jumping
//   else if (canJump === false  && camera.position.y <= -7){
//     camera.position.y += jumpspeed;
//   }
//   //the crouch
//   if(crouch && camera.position.y <= -3){
//     camera.position.y += jumpspeed;
//   }
//   //stop crouching
//   else if(crouch === false && camera.position.y >= -7){
//     camera.position.y -= jumpspeed;
//   }
//   // else if(crouch && moveForward && moveRight || crouch && moveForward && moveLeft){
//   //   movespeed = 0.7;
//   // }
// }

// function animate(){
//   requestAnimationFrame(animate);
//   detectcontrols();
// }animate();

// // event listener for jumping
// window.addEventListener("keydown", move, false);
// window.addEventListener("keyup", move2, false);

//     });
// // to make the ui and other stuff disappear when clicked
// controls.addEventListener('lock', function(){
//   btn.style.display = 'none';
//   movespeed = 0.4;
//       moveForward = false;
//      moveBackward = false;
//      moveLeft = false;
//     moveRight = false;
//      canJump = false;
//      crouch = false;
//      jumpspeed = 1;
// });

// controls.addEventListener('unlock',function(){
//   btn.style.display = 'block';
//   movespeed = 0;
//       moveForward = false;
//      moveBackward = false;
//      moveLeft = false;
//     moveRight = false;
//      canJump = false;
//      crouch = false;
//      jumpspeed = 0;
//      scope.style.display = "none";
// });

//"use strict";
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;
let crouch = false;
let movespeed = 0.4;
let jumpspeed = 1;
let jumpHeight = 7;

// // creates a function for movement
let btn = document.getElementById("button");

btn.addEventListener("click", () => {
  controls.lock();

  const move = function (e) {
    // alert(e.keyCode);
    switch (e.keyCode) {
      case 87: // w
      case 38: // up
        moveForward = true;
        break;
      case 65: // a
      case 37: // left
        moveRight = true;
        break;
      case 83: // s
      case 40: // back
        moveBackward = true;
        break;
      case 68: // d
      case 39: // right
        moveLeft = true;
        break;
      case 16: //shift
        crouch = true;
        break;
      case 32: // space
        canJump = true;
        break;
    }
  };

  const move2 = function (e) {
    switch (e.keyCode) {
      case 87: // w
      case 38: // up
        moveForward = false;
        break;
      case 65: // a
      case 37: // left
        moveRight = false;
        break;
      case 83: // s
      case 40: // back
        moveBackward = false;
        break;
      case 68: // d
      case 39: // right
        moveLeft = false;
        break;
      case 32: // space
        canJump = false;
        break;
      case 16: // shift
        crouch = false;
        break;
    }
  };

  function checkKeyStates() {
    if (moveForward) {
      controls.moveForward(movespeed);
      player.position.z -= movespeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    if (moveBackward) {
      controls.moveForward(-movespeed);
      player.position.z += movespeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    if (moveRight) {
      controls.moveRight(movespeed);
      player.position.x += movespeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    if (moveLeft) {
      controls.moveRight(-movespeed);
      player.position.x -= movespeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    // allows the player to jump
    if (canJump && player.position.y <= jumpHeight) {
      player.position.y -= jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    //to make the player come back down after jumping
    else if (canJump === false && player.position.y <= -3) {
      player.position.y += jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    //the crouch
    if (crouch && player.position.y <= -7) {
      player.position.y += jumpspeed;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    //stop crouching
    else if (crouch === false && player.position.y >= -3) {
      player.position.y -= 0.2;
      updatePlayerData();
      sock.emit("updatePosition", playerData);
    }
    // else if(crouch && moveForward && moveRight || crouch && moveForward && moveLeft){
    //   movespeed = 0.7;
    // }
    // player.rotation.x = camera.rotation.x;
    // player.rotation.y = camera.rotation.y;
    // player.rotation.z = camera.rotation.z;
  }

  // let checkKeyStates = function () {
  //   if (keyState[38] || keyState[87]) {
  //     // up arrow or 'w' - move forward

  //     controls.moveForward(movespeed);
  //     updatePlayerData();
  //     sock.emit("updatePosition", playerData);
  //   }
  //   if (keyState[40] || keyState[83]) {
  //     // down arrow or 's' - move backward
  //     player.position.z += moveSpeed;
  //     controls.moveForward(-movespeed);
  //     updatePlayerData();
  //     sock.emit("updatePosition", playerData);
  //   }
  //   if (keyState[37] || keyState[65]) {
  //     // left arrow or 'a' - rotate left
  //     player.rotation.y -= turnSpeed;
  //     updatePlayerData();
  //     sock.emit("updatePosition", playerData);
  //   }
  //   if (keyState[39] || keyState[68]) {
  //     // right arrow or 'd' - rotate right
  //     player.rotation.y += turnSpeed;
  //     updatePlayerData();
  //     sock.emit("updatePosition", playerData);
  //   }
  //   if (keyState[81]) {
  //     // 'q' - strafe left
  //     player.position.x += moveSpeed * Math.cos(player.rotation.y);
  //     player.position.z -= moveSpeed * Math.sin(player.rotation.y);
  //     updatePlayerData();
  //     sock.emit("updatePosition", playerData);
  //   }
  //   if (keyState[69]) {
  //     // 'e' - strage right
  //     player.position.x += moveSpeed * Math.cos(player.rotation.y);
  //     player.position.z -= moveSpeed * Math.sin(player.rotation.y);
  //     updatePlayerData();
  //     sock.emit("updatePosition", playerData);
  //   }
  // };

  function animate(data) {
    requestAnimationFrame(animate);
    // detectcontrols();

    if (player) {
      updateCameraPosition();

      checkKeyStates();
      // camera.lookAt(player.position);
      camera.position.set(
        player.position.x,
        player.position.y,
        player.position.z
      );
    }
  }
  animate();

  // event listener for jumping
  window.addEventListener("keydown", move, false);
  window.addEventListener("keyup", move2, false);
});
// to make the ui and other stuff disappear when clicked
controls.addEventListener("lock", function () {
  btn.style.display = "none";
  movespeed = 0.4;
  moveForward = false;
  moveBackward = false;
  moveLeft = false;
  moveRight = false;
  canJump = false;
  crouch = false;
  jumpspeed = 1;
});

controls.addEventListener("unlock", function () {
  btn.style.display = "block";
  movespeed = 0;
  moveForward = false;
  moveBackward = false;
  moveLeft = false;
  moveRight = false;
  canJump = false;
  crouch = false;
  jumpspeed = 0;
  scope.style.display = "none";
});
