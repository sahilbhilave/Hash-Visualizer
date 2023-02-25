
function input(n) {
    if (n === 0)
        return "one";
    else if (n === 1)
        return "two";
    else if (n === 2)
        return "three";
    else if (n === 3)
        return "four";
    else if (n === 4)
        return "five";
    else if (n === 5)
        return "six";
    else if (n === 6)
        return "seven";
    else if (n === 7)
        return "eight";
    else if (n === 8)
        return "nine";
    else if (n === 9)
        return "ten";
    else
        return "null";
}

function clearColor() {
    for (let i = 0; i < 10; i++) {
        let a = document.getElementById(input(i));
        a.style.backgroundColor = "white";
    }
}

function Reset() {
    clearColor();
    let c = document.getElementById('calc');
    let res = document.getElementById('result');
    c.innerHTML = "";
    res.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        let a = document.getElementById(input(i));
        a.innerText = "";
    }
}

function isFull()
{
    for (let i = 0; i < 10; i++) {
        let a = document.getElementById(input(i));
        if(a.innerText === '' || a.innerText === 'x')
        {
            return false;
        }
    }

    return true;
}

export {input,clearColor,isFull,Reset};