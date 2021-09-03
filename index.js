const turnpara = document.getElementById("para");
let i = 1;
let j;
turn();
function check() {
  const box1 = document.getElementById("1").innerText;
  const box2 = document.getElementById("2").innerText;
  const box3 = document.getElementById("3").innerText;
  const box4 = document.getElementById("4").innerText;
  const box5 = document.getElementById("5").innerText;
  const box6 = document.getElementById("6").innerText;
  const box7 = document.getElementById("7").innerText;
  const box8 = document.getElementById("8").innerText;
  const box9 = document.getElementById("9").innerText;
  if (
      (box1==box2&&box2==box3&&box1=='o')||
      (box4==box5&&box5==box6&&box4=='o')||
      (box7==box8&&box8==box9&&box7=='o')||
      (box1==box4&&box4==box7&&box1=='o')||
      (box2==box5&&box5==box8&&box2=='o')||
      (box3==box6&&box6==box9&&box3=='o')||
      (box1==box5&&box5==box9&&box1=='o')||
      (box3==box5&&box5==box7&&box3=='o')
      ){
          turnpara.innerHTML='player1 won!!';
          setTimeout(function(){
              alert('Player 1 Won');
              window.location.reload();

          },500);
        
  }
  else if(
    (box1==box2&&box2==box3&&box1=='x')||
    (box4==box5&&box5==box6&&box4=='x')||
    (box7==box8&&box8==box9&&box7=='x')||
    (box1==box4&&box4==box7&&box1=='x')||
    (box2==box5&&box5==box8&&box2=='x')||
    (box3==box6&&box6==box9&&box3=='x')||
    (box1==box5&&box5==box9&&box1=='x')||
    (box3==box5&&box5==box7&&box3=='x')
  ){
    turnpara.innerHTML='Player 2 Won!!';
    setTimeout(function(){
        alert('Player 2 Won');
        window.location.reload();

    },500);
  }
}
function turn() {
  for (j = 1; j <= 9; j++) {
    document.getElementById(`${j}`).addEventListener("click", function () {
      console.log(i);
      if (i % 2 == 0) {
        turnpara.innerHTML='Player1 Turn';
        this.innerHTML = "x";
        this.classList.add("btn-warning");
        this.classList.add("disabled");
       check();
      }
       else {
           turnpara.innerHTML='Player2 Turn';
        this.innerHTML = "o";
        this.classList.add("btn-secondary");
        this.classList.add("disabled");
        check();
      }
      i++;
      if (i == 10) {
          setTimeout(function(){
              turnpara.innerHTML='Game Over';
              alert('Game Over');
              window.location.reload();
          },2000);
      }
    });
  }
}
