function insertHashing(c,num,input,res) {
    c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
    let str = input(num % 10);

    let n = document.getElementById(str);
    if (n.innerText === '' || n.innerText === 'x') {
        n.innerText = num;
        n.style.backgroundColor = "green";
        res.innerHTML = "<b style=\"color:green\">Element Added at Position " + num % 10 + "</b>";
    }
    else {
        n.style.backgroundColor = "red";
        c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + num % 10 + "</b>";
        res.innerHTML = "<b style=\"color:red\">Collision Occured At Position " + num % 10 + "</b>";
    }
}


function findHashing(c,num,input,res)
{
            c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
            let str = input(num % 10);

            let n = document.getElementById(str);
            if (n.innerText === num) {
                n.style.backgroundColor = "green";
                c.innerHTML = c.innerHTML + "<b>Element found at position " + num % 10 + "</b>";
                res.innerHTML = "<b style=\"color:green\">Element found at position " + num % 10 + "</b>";
            }
            else {
                n.style.backgroundColor = "red";
                c.innerHTML = c.innerHTML + "<b>Element Not Found</b>";
                res.innerHTML = "<b style=\"color:red\">Element Not Found</b>";
            }
}

function deleteHashing(c,num,input,res)
{
            c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
            let str = input(num % 10);

            let n = document.getElementById(str);
            if (n.innerText === num) {
                n.innerText = "x";
                n.style.backgroundColor = "green";
                c.innerHTML = c.innerHTML + "<b>" + num + " Deleted Successfully</b>";
                res.innerHTML = "<b style=\"color:green\">" + num + " Deleted Successfully</b>";
            }
            else {
                n.style.backgroundColor = "red";
                c.innerHTML = c.innerHTML + "<b>Element Not Found</b>";
                res.innerHTML = "<b style=\"color:red\">Element Not Found</b>";
            }
}

export{insertHashing, findHashing, deleteHashing};