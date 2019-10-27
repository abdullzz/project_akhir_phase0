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

var temp = []

function add(number)
{
    temp.push(number)
    document.getElementsByClassName('display')[0].innerHTML = temp.join('')
}

function clear()
{
    temp = []
    document.getElementsByClassName('display')[0].innerHTML = '0'
}

function result()
{
    console.log(temp)
}