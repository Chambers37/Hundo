
//Get values from the page
//Starts or controller function

function getValues(){

    //Get values from the page

    let startValue = parseInt(document.getElementById('startValue').value);
    let endValue = parseInt(document.getElementById('endValue').value);
    

    //Validating input as a number

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){

        //we call generate numbers

        let numbers = generateNumbers(startValue, endValue);

        //we call display numbers

        displayNumbers(numbers);

    }else{

        alert('You must enter a number')

    }

}

//generate numbers from startValue to endValue
//Logic function(s)
function generateNumbers(startValue, endValue){

    let numbers = [];

    //We want to get all numbers from start to end

    for(let index = startValue; index <= endValue; index++){
        
        numbers.push(index);

    }

    return numbers;

}

//Display numbers and mark even numbers bold
//Display or view functions
function displayNumbers(numbers){

    let templateRows = '';

    for (let index = 0; index < numbers.length; index++) {

        let classname = 'even';

        let number = numbers[index];

        if(number % 2 == 0){

            classname = 'even';

        }else{

            classname = 'odd';

        }

        templateRows += `<tr><td class="${classname}">${number}</td></tr>`;
        
    }

    document.getElementById('results').innerHTML = templateRows
}