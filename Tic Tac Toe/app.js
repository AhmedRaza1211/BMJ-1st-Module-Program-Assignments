var boolean = true;

function clicking(getBox) {
    // console.log(getBox);
    if (boolean == true) {
        getBox.innerHTML = 'X';
        boolean = false;
    } else if (boolean == false) {
        getBox.innerHTML = 'O';
        boolean = true;
    }
}