//should check for borders and walls

export default function checkPosition(futPosition) {

    const boardHeight = document.getElementById('board').clientHeight;
    const boardWidth = document.getElementById('board').clientWidth;
    const playerSide = document.getElementById('player1').clientWidth;
    const minTop = 0;
    const minLeft = 0;
    const maxBottom = boardHeight - (2*playerSide/3);
    const maxRight = boardWidth - (2*playerSide/3);
    // const restrictedAreas = {
    // }

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
