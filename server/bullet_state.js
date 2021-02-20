// store all players
let bullets = [];

function Bullet() {
  this.bulletId = bullets.length;
  this.x = 1;
  this.y = -1;
  this.z = 1;
  this.sizeX = 0.2;
  this.sizeY = 0.2;
  this.sizeZ = 0.5;
  this.speed = 500;
}

//adding the player when the join
let addBullet = function (id) {
  let bullet = new Bullet();
  bullet.bulletId = id;
  bullets.push(bullet);

  return player;
};

//removing the player when they leave
let removeBullet = function (bullet) {
  let index = bullets.indexOf(bullet);

  if (index > -1) {
    bullets.splice(index, 1);
  }
};

let bulletForId = function (id) {
  let bullet;
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].bulletId === id) {
      bullet = bullets[i];
      break;
    }
  }

  return bullet;
};

//updating the players position when moving
let updateBulletData = function (data) {
  let bullet = bulletForId(data.bulletId);
  bullet.x = data.x;
  bullet.y = data.y;
  bullet.z = data.z;
  bullet.r_x = data.r_x;
  bullet.r_y = data.r_y;
  bullet.r_z = data.r_z;

  return bullet;
};

//exproting the function
module.exports.players = bullets;
module.exports.addPlayer = addBullet;
module.exports.removePlayer = removeBullet;
module.exports.playerForId = bulletForId;
module.exports.updatePlayerData = updateBulletData;
