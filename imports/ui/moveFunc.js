import checkPosition from './checkPosition.js';

(function() {
  let position = {
    top: 0,
    left:0
  };

  let futposition = {
    top: 0,
    left:0
  };

  const speed = 10;

  document.addEventListener('keydown',(e) => {
    var t = document.getElementById('player1');

    switch (e.code) {

      case 'ArrowDown':
        futPosition = {
          top: position.top + speed,
          left:position.left
        }

        if (checkPosition(futPosition)) {
          position.top = position.top + speed;
          t.style.top = `${position.top}px`;
          futPosition = position;
        }
        break;

      case 'ArrowUp':

        futPosition = {
          top: position.top - speed,
          left:position.left
        }

        if (checkPosition(futPosition)) {
          position.top = position.top - speed;
          t.style.top = `${position.top}px`;
          futPosition = position;
        }
        break;

      case 'ArrowLeft':
        futPosition = {
          top: position.top,
          left:position.left - speed
        }

        if (checkPosition(futPosition)) {
          position.left = position.left - speed;
          t.style.left = `${position.left}px`;
          futPosition = position;
        }
        break;
      case 'ArrowRight':
        futPosition = {
          top: position.top,
          left:position.left + speed
        }

        if (checkPosition(futPosition)) {
          position.left = position.left + speed;
          t.style.left = `${position.left}px`;
          futPosition = position;
        }

        break;
  }
    // var rect = t.getBoundingClientRect();
    // console.log(rect.top, rect.left, rect.bottom, rect.right);
  });
})();
