function setLevel() {
    let difficulty = prompt("Choose easy, medium, or hard.");


    if (difficulty == "easy") {
        return 10
        
    }
    else if 
    (difficulty == "medium") {
        return 100
        
        }
    
    else if 
        (difficulty == "hard") {
         return 1000
            
        }
    else {
        alert("That is not a valid option!")
        setLevel()
    }
}





let isPlaying = true
let level = setLevel()
let rand = Math.floor(Math.random() * level) + 1;
while (isPlaying) {
let input = parseInt(window.prompt(`Guess a number between 1 and ${level}`));   
if (input == rand) {
        alert("Congratulations, you guessed correctly!")
        isPlaying = false
    } 
    else if
        (input > rand) {
            alert(`Your guess ${input} is too high, try again!`)
        }
    else if
        (input < rand) {
            alert(`Your guess ${input} is too low, try  again!`)
        }
    }    
    
