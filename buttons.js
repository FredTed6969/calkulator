var input = document.getElementById('result');
function buttons(button) {
    var buttonText = button.querySelector('p').textContent;
    input.value += buttonText;
}



function clearInput() {
    input.value = "";
};


function equal() {
    input.value = eval(input.value); 
};

