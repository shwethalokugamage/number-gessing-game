let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum)

function guess() {
    let input = document.getElementById('guessnumber');

    if (input.value == randomNum) {
        console.log('win')
        Swal.fire({
            title: "You Won!",
            text: "Good Job Play Again!",
            icon: "success"
        });
        randomNum=Math.floor(Math.random() *10) + 1;
        console.log(randomNum)
    } else if (input.value > randomNum) {
        Swal.fire({
            title: "You lose!",
            text: "Too High ,Play Again!",
            icon: "error"
        });
    } else {
        Swal.fire({
            title: "You lose!",
            text: "Too Low Play Again!",
            icon: "error"
        });
    }

}
