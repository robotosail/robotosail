// // "use strict";

let leftclick = false;
let id, a;
let bullet;
let emitter = new THREE.Object3D();
emitter.position.set(-0.1, -0.5, -1.5);
camera.add(emitter);

// function gun(){
// //creating the gun
// let weapon = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 2), new THREE.MeshBasicMaterial({
//   color: "aqua"
// }));

// scene.add(weapon);
// // weapon's position
// weapon.position.copy(emitter.getWorldPosition()); // start position - the tip of the weapon
// weapon.position.z = camera.position.z; // start position - the tip of the weapon

// weapon.position.y = camera.position.y + 1; // start position - the tip of the weapon
//   weapon.quaternion.copy(camera.quaternion); // apply camera's

// setInterval(function(){
// scene.remove(weapon);

// }, 0.01);
// }
// setInterval(gun, 0.01);

// making the bullet array
let bullets = [];

// to make the bullt=et shoot for half of a seconds

function shoot(e) {
  switch (e.button) {
    case 0:
      leftclick = true;
      break;
  }
}
function shoot2(e) {
  switch (e.button) {
    case 0:
      leftclick = false;
      break;
  }
}
window.addEventListener("mousedown", shoot);
window.addEventListener("mouseup", shoot2);

let inte = setInterval(multishoot, 100);

function multishoot() {
  bullet = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.2, 0.5),
    new THREE.MeshBasicMaterial({
      color: "blue"
    })
  );

  for (let i = 0; i < bullets.length; i += 1) {
    if (bullets[i] === undefined) continue;
    if (bullets[i].alive === false) {
      bullets.splice(i, 1);
      continue;
    }
  }
  // the bullet
  if (leftclick) {
    bullet.position.copy(emitter.getWorldPosition()); // start position - the tip of the weapon
    bullet.quaternion.copy(camera.quaternion); // apply camera's quaternion
    setTimeout(function () {
      // bullet.alive = false;
      scene.remove(bullet);
    }, 1000);
    bullets.push(bullet);
    scene.add(bullet);
  }
}

// setting the speed of the bullet
let bulletspeed = 500;
let clock = new THREE.Clock();
let delta = 0;

// making a function for the bullet
(function render() {
  requestAnimationFrame(render);
  delta = clock.getDelta();
  bullets.forEach((b) => {
    b.translateZ(-bulletspeed * delta); // move along the local z-axis
  });
  renderer.render(scene, camera);
  // multishoot();
})();

// this stops the bullet from shooting
id = setInterval(stopbulletfromshooting, 6000);

function stopbulletfromshooting() {
  if (leftclick) {
    clearInterval(inte);
    console.log("bullet has stopped shooting");
    clearInterval(a);
    clearInterval(bulletInterval);
  }
}

// allows people to reload
let reload = document.getElementById("reload");
function reloading(e) {
  if (e.keyCode == 82) {
    a = setInterval(multishoot, 100);
    console.log("bullet can shoot");
    rightclick = false;
    leftclick = false;
    reload.style.display = "block";
    cross.style.display = "none";
  }
}

function reloadingstopped(e) {
  if (e.keyCode == 82) {
    reload.style.display = "none";
    cross.style.display = "block";
    bulletcounter.innerHTML = "30 / 30";
  }
}

window.addEventListener("keydown", reloading);
window.addEventListener("keyup", reloadingstopped);
