function change_theme(colors)
{
    let colback = "white"
    if(colors == 'blue'){colback = "#6cacc5"}
  
    for(let i = 0; i < 17; i++)
    {
        document.getElementsByTagName('button')[i].style.color = colback
        document.getElementsByTagName('button')[i].style.background = colors
    }
    document.getElementsByClassName('display')[0].style.color = colors
    document.getElementsByClassName('title')[0].style.background = colors
}

let sum = 0
let number1 = 0
let number2 = 0
let waiting = false
let arr = []

function calc(input)
{
    if(input == 'r')
    {
        document.getElementsByClassName('display')[0].innerHTML = sum
        number1 = sum
        number2 = 0
        arr = []
    }
    else if(waiting)
    {
        if(!isNumber(input))
        {
            number2 = parseInt(arr.join('')); 
            arr = [];
            sum += number1 + number2; 
            number1 = 0; number2 = 0
            document.getElementsByClassName('display')[0].innerHTML = sum
        }
        else
        {
            arr.push(input)
            document.getElementsByClassName('display')[0].innerHTML = arr.join('')
        }
    }
    else
    {
        if(!isNumber(input))
        {
            waiting = true;
            number1 = parseInt(arr.join(''))
            arr = []
        }
        else
        {
            arr.push(input)
            document.getElementsByClassName('display')[0].innerHTML = arr.join('')
        }
    }
}

function isNumber(x)
{
    if(x >= '0' && x <= '9'){return true}
    return false
}

function clears()
{
    sum = 0
    number1 = 0
    number2 = 0
    waiting = false
    arr = []
    document.getElementsByClassName('display')[0].innerHTML = "0"
}
