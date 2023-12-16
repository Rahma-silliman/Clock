const hour = document.querySelector('.clock-hour');
const minute = document.querySelector('.clock-minute');
const seconde = document.querySelector('.clock-seconde');

function initLocalClocks() {

    let date = new Date;
    let seconds = date.getSeconds();
    console.log(seconds);
    let minutes = date.getMinutes();
    let hours = date.getHours();

    
    let hands = [
      {
        hand: hour,
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: minute,
        angle: (minutes * 6)
      },
      {
        hand: seconde,
        angle: (seconds * 6)
      }
    ];


    for (var j = 0; j < hands.length; j++) {
      console.log(hands[j])
    
        hands[j].hand.style.transform = 'rotateZ('+ hands[j].angle +'deg)';
         
          console.log(hands[0])
     
   
    }
  }
  initLocalClocks()