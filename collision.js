
function hasCollided(bullet, wall){
    bulletRightEdge = bullet.x+bullet.width/2;
    wallLeftEdge = wall.x-wall.width/2;
    if(bulletRightEdge>wallLeftEdge){
        return true;
    }
    return false;
}