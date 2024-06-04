 let herbCount = 35;
 let fruitCount = 7;

//  start
let score = 0;
const scoreElement = document.getElementById("score");
// end
const boy1 = document.querySelector(".boy");

 let boypos={
  x:0,
  y:0,
 };

 let boyVel={
  x:0,
  y:0,
 };
 let boySpeed = 1.8;

 const startBoyPos ={
  x: window.innerWidth /2,
  y: window.innerHeight/2,
 };

// --
function start(){
 generatRondomHerb();
 generatRondomFruit();

 boypos = startBoyPos;

}
 

function update(){
  boypos.x += boyVel.x;
  boypos.y += boyVel.y;
  boy1.style.left=boypos.x + "px";
  boy1.style.top=boypos.y + "px";
  
  checkCollisions();
  
    // console.log("run");
    requestAnimationFrame(update);
}

// -----------move boy-----------

window.addEventListener('keydown', (e) =>{
  if (e.key == "ArrowUp"){
    boyVel.y = -1 * boySpeed;
  }
  if (e.key == "ArrowDown"){
    boyVel.y = 1 * boySpeed;
  }
  if (e.key == "ArrowLeft"){
    boyVel.x = -1 * boySpeed;
  }
  if (e.key == "ArrowRight"){
    boyVel.x = 1 * boySpeed;
  }
});

window.addEventListener("keyup", (e)=>{
  boyVel.x=0;
  boyVel.y=0;
});



function generatRondomHerb(){
  for (let index = 0; index < herbCount; index++) {
    let newherb = document.createElement('div')
    newherb.classList.add("herb");
    newherb.style.left = Math.random() *100 + "%";
    newherb.style.top = Math.random() *100 + "%";
    document.body.appendChild(newherb);
    
  }

}

function generatRondomFruit(){
    for (let index = 0; index < fruitCount; index++) {
      let newfruit = document.createElement('div')
      newfruit .classList.add("fruit");
      newfruit .style.left = Math.random() *100 + "%";
      newfruit .style.top = Math.random() *100 + "%";
      document.body.appendChild(newfruit);
      
    }
  
  }


  function checkCollisions() {
    let fruits = document.querySelectorAll('.fruit');
    fruits.forEach(fruit => {
        if (collision(fruit, boy1)) {
          fruit.style.left = Math.random() * 100 + "%";
          fruit.style.top = Math.random() * 100 + "%";
            updateScore();
        }
    });
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
  if (score >= 10) {
      window.location.href = 'scor.html'; 
  }
}





// collisions
 

function collision($div1, $div2) {
  var x1 = $div1.getBoundingClientRect().left;
  var y1 = $div1.getBoundingClientRect().top;
  var h1 = $div1.clientHeight;
  var w1 = $div1.clientWidth;
  var b1 = y1 + h1;
  var r1 = x1 + w1;

  var x2 = $div2.getBoundingClientRect().left;
  var y2 = $div2.getBoundingClientRect().top;
  var h2 = $div2.clientHeight;
  var w2 = $div2.clientWidth;
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}




// run

start();
update();