 // controller 
 
 function chooseBar(barNo) { 
    chosenBar = barNo ? chosenBar = barNo : chosenBar = null;
    show()
}

function removeBar() {  
    numbers.splice(chosenBar -1, 1); chosenBar = null;
    show()
}

function changeChosenBar() {
    if (inputValue > 10 || inputValue < 1) {
        alert ('Verdien må være mellom 1 - 10');
    }
    else {
        numbers.splice(chosenBar -1, 1, parseInt(inputValue));
        show()
    }
}

function addNewBar() {
    if (inputValue > 10 || inputValue < 1) {
        alert ('Verdien må være mellom 1 - 10')
    }
    else {
        numbers.push(inputValue);
    }
    show()
}