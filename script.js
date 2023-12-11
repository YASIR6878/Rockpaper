
        let music=false;
        let score = JSON.parse(localStorage.getItem('score'));

        if (score === null) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }
    
        function playermove(player) {
            if(music){
            let computermove = functionmove();
            let result = '';

            if (player === 'rock') {
                if (computermove === 'rock') {
                    result = 'Tie';
                } else if (computermove === 'paper') {
                    result = 'You Lose';
                } else {
                    result = 'You Win';
                }
            } else if (player === 'paper') {
                if (computermove === 'paper') {
                    result = 'Tie';
                } else if (computermove === 'scissor') {
                    result = 'You Lose';
                } else {
                    result = 'You Win';
                }
            } else {
                if (computermove === 'scissor') {
                    result = 'Tie';
                } else if (computermove === 'rock') {
                    result = 'You Lose';
                } else {
                    result = 'You Win';
                }
            }

            if (result === 'You Win') {
                score.wins += 1;
            } else if (result === 'You Lose') {
                score.losses += 1;
            } else {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.print').innerHTML = `<img src="images/${player}.png" style="width: 100px; height: 100px;"><img src="images/${computermove}.png" style="width: 100px; height: 100px;">`;

            document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            document.querySelector('.result').innerHTML = `Result: ${result}`;
        }}

        function functionmove() {
            let computermove = '';
            let randomnum = Math.random();

            if (randomnum >= 0 && randomnum < 1/3) {
                computermove = 'rock';
            } else if (randomnum >= 1/3 && randomnum < 2/3) {
                computermove = 'paper';
            } else {
                computermove = 'scissor';
            }

            return computermove;
        }
        
        function resetScore() {
            if(music){
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            document.querySelector('.print').innerHTML=``
            document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }}
        let autoplying = false;
        let intervalid;
       
        function autoplay() {
            if(music){
        if (!autoplying) {
        autoplying = true;
        intervalid = setInterval(function () {
            const user = functionmove();
            playermove(user);
        }, 1000);
        } else {
        clearInterval(intervalid);
        autoplying = false;
    }
    }}
    function playmusic(){
      music=true;
      const audio = document.getElementById('myAudio'); 
      audio.play();
     
    }
    document.body.addEventListener('keydown',(event)=>{
        if(music){
        if(event.key==='p'||event.key==='P'){
            playermove('paper');
        }
        else if(event.key==='r'||event.key==='R'){
            playermove('rock');
        }
        else if(event.key==='s'||event.key==='S'){
            playermove('scissor');
        }
    }

    })
  
