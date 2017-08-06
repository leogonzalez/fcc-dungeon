//should check for borders and walls

export default function checkPosition(futPosition) {

    //elements
    const player = futPosition;
    const wall = {top:120 , left:120};
    const playerSide = document.getElementById('player1').clientWidth;
    //board restrictions
    const boardHeight = document.getElementById('board').clientHeight;
    const boardWidth = document.getElementById('board').clientWidth;
    const minTop = 0;
    const minLeft = 0;
    const maxBottom = boardHeight - (2*playerSide/3);
    const maxRight = boardWidth - (2*playerSide/3);

    // wall restriction
    const wallHeight = document.getElementById('wall').clientHeight;
    const wallWidth = document.getElementById('wall').clientWidth;

    // .getBoundingClientRect();
    console.log(`WALL: Top:${wall.top} | Left:${wall.left} | Bottom:${wall.top + wallHeight} |Right:${wall.left + wallWidth}`);

    // .getBoundingClientRect();
    console.log(`PLAYER: Top:${player.top} | Left:${player.left} | Bottom:${player.top + playerSide} |Right:${player.left + playerSide}`);
    console.log(`---------------------------------------------`);


    const restrictedAreas = {
      top: [],
      left: []
    }

    if (futPosition.top > maxBottom){
      return false;
    } else if (futPosition.left < minLeft){
      return false;
    } else if (futPosition.left > maxRight){
      return false;
    } else if (futPosition.top < minTop){
      return false;
    } else {
      return true;
    }

}
