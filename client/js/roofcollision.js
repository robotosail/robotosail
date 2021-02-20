// collision detection on the roof
function checkroof(a, d) {
  let b1 = a.position.y - a.geometry.parameters.height / 2;
  let t1 = a.position.y + a.geometry.parameters.height / 2;
  let r1 = a.position.x + a.geometry.parameters.width / 2;
  let l1 = a.position.x - a.geometry.parameters.width / 2;
  let f1 = a.position.z - a.geometry.parameters.depth / 2;
  let g1 = a.position.z + a.geometry.parameters.depth / 2;
  let b2 = d.position.y - d.geometry.parameters.height / 2;
  let t2 = d.position.y + d.geometry.parameters.height / 2;
  let r2 = d.position.x + d.geometry.parameters.width / 2;
  let l2 = d.position.x - d.geometry.parameters.width / 2;
  let f2 = d.position.z - d.geometry.parameters.depth / 2;
  let g2 = d.position.z + d.geometry.parameters.depth / 2;
  if (t1 < b2 || r1 < l2 || b1 > t2 || l1 > r2 || f1 > g2 || g1 < f2) {
    return false;
  }
  return player.position.y = -40;
}

function animie2() {
  requestAnimationFrame(animie2);
  checkroof(player, roof);
  checkroof(player, roof1);
  checkroof(player, roofpatch1);
  checkroof(player, roofpatch2);
}
animie2();
