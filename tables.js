let fnum;
let snum;
let score = 0;
let correctAnswer ;
let startButton = document.querySelector(".start");
let optionsButton = document.getElementsByClassName("options");
let options;
let yourAnswer;
let wrongOptions;
let index;
let scoreArray;
let highScore = 0;
let signArray = ["X", "+", "-", "/"];




    function isUnique(arr) {
    const seenValues = {};
    for (i = 0; i < arr.length; i++) {
            if (seenValues[arr[i]]) {
                return false;
            }
            else {
                seenValues[arr[i]] = true;
            }
        }
        return true;
    }

    function calcRanNum(){
        document.getElementById("fn").innerHTML = `<span>${fnum}</span>`;
        document.getElementById("sn").innerHTML = `<span>${snum}</span>`;
        document.getElementById("sign").innerHTML = `<span>${signArray[sign]}</span>`;
    }
    function multiplyNum() {
        return fnum * snum;
    }
    function addNum(){
        return fnum + snum;
    }
    function subtractNum(){
        return fnum - snum;
    }
    function divideNum(){
        return fnum / snum;
    }
    function randomOptions(){
        if(signArray[sign] === "X"){
            return Math.floor(Math.random() * (fnum * snum)) + 5;
        }else if(signArray[sign] === "+"){
            return Math.floor(Math.random() * (fnum + snum)) + 5;
        }else if(signArray[sign] === "-"){
            return Math.floor(Math.random() * (fnum - snum)) + 5;
        }else if(signArray[sign] === "/"){
            return Math.floor(Math.random() * (fnum / snum)) + 5;
        }
    }
    
    function scoreBoard(){
        score += 10;
    }

    function highScoreBoard(){
        if( highScore < score){
            highScore = score;
        }
    }
    function optionsFunction(){
        for(i=0; i<3; i++){
            wrongOptions = randomOptions();
            options.push(wrongOptions);
        
        }
    }
    
    ///WHEN THE START BUTTON IS CLICKED
    function startGame(event){
        event.preventDefault();
        
        if(startButton.innerText === "START"){
            startButton.innerHTML = "<h3>STOP</h3>"
            startButton.style.backgroundColor = "red";

            
            sign = Math.floor(Math.random() * signArray.length);
            console.log(signArray[sign]);
    
            
            
            if(signArray[sign] == "X"){
                fnum = Math.floor(Math.random() * 11) + 2;
                snum = Math.floor(Math.random() * 11) + 2;
                calcRanNum();
                multiplyNum();
                correctAnswer = multiplyNum();
            }else if(signArray[sign] == "+"){
                fnum = Math.floor(Math.random() * 69) + 2;
                snum = Math.floor(Math.random() * 69) + 2;
                calcRanNum();
                addNum();
                correctAnswer = addNum();
            }else if(signArray[sign] == "-"){
                fnum = Math.floor(Math.random() * 69) + 2;
                snum = Math.floor(Math.random() * 69) + 2;
                calcRanNum();
               function subtractCheck(){
                  if(fnum < snum || snum < 1){
                      console.log(`${fnum} < ${snum}`)
                    snum = Math.floor(Math.random() * fnum) - 2;
                    document.getElementById("sn").innerHTML = `<span>${snum}</span>`;
                    subtractCheck();
                  }else{
                  subtractNum();
                  correctAnswer = subtractNum();
                  }
                } 
                subtractCheck();
            }else if(signArray[sign] == "/"){
                fnum = Math.floor(Math.random() * 70) + 2;
                snum = Math.floor(Math.random() * 70) + 2;
                calcRanNum();
                function divisionCheck() {
                    if (fnum % snum !== 0 || fnum === snum || divideNum() == 2){
                        fnum = Math.floor(Math.random() * 70) + 2;
                        snum = Math.floor(Math.random() * fnum) + 2;
                        document.getElementById("fn").innerHTML = `<span>${fnum}</span>`;
                        document.getElementById("sn").innerHTML = `<span>${snum}</span>`;
                        console.log(`${fnum} % ${snum}`)
                        divisionCheck();
                    }else{
                        divideNum();
                        correctAnswer = divideNum();
                    }
                }
               divisionCheck(); 
            }
            
            
            randomOptions();
            
            
            options = [];
            options.push(correctAnswer);
            optionsFunction();
            
            console.log(options);
                for(k=0; k<=options.length; k++){
                    function check(){
                        if(isUnique(options) === false){
                            options.splice(1,4);
                            optionsFunction();
                            console.log(false);
                            check();
                        }
                    }
                }
        
                check();
        
        
            console.log(options);
            console.log(correctAnswer);
        
            options.sort(function(a, b){return 0.5 - Math.random()});
        
            document.getElementById("optionA").innerHTML = `<span> ${options[0]} </span>`;
            document.getElementById("optionB").innerHTML = `<span> ${options[1]} </span>`;
            document.getElementById("optionC").innerHTML = `<span> ${options[2]} </span>`;
            document.getElementById("optionD").innerHTML = `<span> ${options[3]} </span>`;
            
            scoreArray = [];

            index = 50;
            let time = setInterval(function(){
                     index--;
         
                     document.getElementById("countDown").innerText = index
         
                     if(index < 1){
                         clearInterval(time);
                         alert(`Game Over \r\n Your Score is ${score}`);
                         startButton.innerHTML = "<h3>RESTART GAME</h3>"
                         startButton.style.backgroundColor = "#13c05b";
                         if(window.matchMedia("(max-width: 968px)").matches){
                            startButton.style.width = "62vw";
                            startButton.style.marginLeft = "13vw";
                        }else{
                            startButton.style.width = "19vw";
                            startButton.style.marginLeft = "13vw";
                        }
                         
                        
                        highScoreBoard();
                        document.querySelector(".highScore").innerText = highScore;
                        scoreArray.push(score);
                        console.log(scoreArray);
                        console.log(highScore);

                     }
                     
                 }, 1000);
    
               console.log(time);    
                 
        }else if(startButton.innerText === "RESTART GAME"){
            score = 0
            document.querySelector(".score").innerText = score;
            startButton.innerHTML = "<h3>START</h3>"
            startButton.style.backgroundColor = "#e6e20e";
            if(window.matchMedia("(max-width: 968px)").matches){
                startButton.style.width = "34vw";
                startButton.style.marginLeft = "30vw";
            }else{
                startButton.style.width = "9vw";
                startButton.style.marginLeft = "17vw";
            }
            
        }else{
            startButton.innerHTML = "<h3>START</h3>"
            startButton.style.backgroundColor = "#e6e20e";
            index = 1;
        }
         
    }
    
    startButton.addEventListener("click", startGame);





    ///After the start button has been clicked AND ANY OF THE OPTIONS IS CHOSEN
    function startedGame(event){
        event.preventDefault();
        
        if(startButton.innerText === "STOP"){    
            yourAnswer = parseInt(this.innerText);
            console.log(yourAnswer);
            console.log(correctAnswer);
            function compareAnswer(){
                if(correctAnswer === yourAnswer){
                     
                    scoreBoard();
                    
                    sign = Math.floor(Math.random() * signArray.length);

                    

                    if(signArray[sign] == "X"){
                        fnum = Math.floor(Math.random() * 11) + 2;
                        snum = Math.floor(Math.random() * 11) + 2;
                        calcRanNum();
                        multiplyNum();
                        correctAnswer = multiplyNum();
                    }else if(signArray[sign] == "+"){
                        fnum = Math.floor(Math.random() * 69) + 2;
                        snum = Math.floor(Math.random() * 69) + 2;
                        calcRanNum();
                        addNum();
                        correctAnswer = addNum();
                    }else if(signArray[sign] == "-"){
                        fnum = Math.floor(Math.random() * 69) + 2;
                        snum = Math.floor(Math.random() * 69) + 2;
                        calcRanNum();
                       function subtractCheck(){
                          if(fnum < snum || snum < 1){
                            console.log(`${fnum} < ${snum}`)
                            snum = Math.floor(Math.random() * fnum) - 2;
                            document.getElementById("sn").innerHTML = `<span>${snum}</span>`;
                            console.log(`${fnum} < ${snum}`)
                            subtractCheck();
                          }else{
                          subtractNum();
                          correctAnswer = subtractNum();
                          }
                        } 
                        subtractCheck();
                    }else if(signArray[sign] == "/"){
                        fnum = Math.floor(Math.random() * 70) + 2;
                        snum = Math.floor(Math.random() * 70) + 2;
                        calcRanNum();
                        function divisionCheck() {
                            if (fnum % snum !== 0 || fnum === snum || divideNum() == 2){
                                fnum = Math.floor(Math.random() * 70) + 2;
                                snum = Math.floor(Math.random() * fnum) + 2;
                                document.getElementById("fn").innerHTML = `<span>${fnum}</span>`;
                                document.getElementById("sn").innerHTML = `<span>${snum}</span>`;
                                console.log(`${fnum} % ${snum}`)
                                divisionCheck();
                            }else{
                                divideNum();
                                correctAnswer = divideNum();
                                console.log(correctAnswer);
                            }
                        }
                       divisionCheck(); 
                    }
                    
                    
                    randomOptions();
                    
                    options = [];
                    options.push(correctAnswer);
                    optionsFunction();
                    
                        for(k=0; k<=options.length; k++){
                            function check(){
                                if(isUnique(options) === false){
                                    options.splice(1,4);
                                    optionsFunction();
                                    console.log(false);
                                    check();
                                }else{
                                    console.log(true);
                                }
                            }
                        }
                        
                        check();
                        
                        
                        console.log(options);
                        
                        options.sort(function(a, b){return 0.5 - Math.random()});
                        
                        
                        document.getElementById("optionA").innerHTML = `<span> ${options[0]} </span>`;
                        document.getElementById("optionB").innerHTML = `<span> ${options[1]} </span>`;
                        document.getElementById("optionC").innerHTML = `<span> ${options[2]} </span>`;
                        document.getElementById("optionD").innerHTML = `<span> ${options[3]} </span>`;
                        console.log("true");
                        

                        document.querySelector(".score").innerText = score;
                        highScoreBoard();
                        document.querySelector(".highScore").innerText = highScore;

                    }else{
                        console.log("false");
                    }
                    
                }
                
                compareAnswer(); 
                
            }
            
    }
        
    Array.from(optionsButton).forEach(cur => cur.addEventListener("click", startedGame));
    
    
    