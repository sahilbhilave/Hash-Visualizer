import { isFull } from '../basic'

function hash1(n) {
    return (n % 10);
}

function hash2(n) {
    return (5 - (n % 5));
}

function final(count, num) {
    return (parseInt(hash1(num)) + count * parseInt(hash2(num))) % 10;
}

function insertDouble(c, num, input, res) {
    c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (hash1(num)) + "</p>";
    let str = input(hash1(num));

    let n = document.getElementById(str);
    if (n.innerText === '') {
        n.innerText = num;
        n.style.backgroundColor = "green";
        res.innerHTML = "<b style=\"color:green\">Element Added at Position " + num % 10 + "</b>";
    }
    else {
        let x = 0;

        n.style.backgroundColor = "yellow";
        let count = 0
        while (count <= 9 && n.innerText !== "" && n.innerText !== num && n.innerText !== 'x') {
            count++;
            c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + final(count - 1, num) + "</b><p> [Next Position = (" + num + " % 10 + " + (count + 1) + " * (5 - (" + num + " % 5))) % 10]</p>";
            c.innerHTML = c.innerHTML + "<p>Next Position = (" + hash1(num) + " + " + (count) + " * " + hash2(num) + ") % 10 = " + final(count, num) + "</p>";
            x = final(count, num);
            let z = input(x);
            n = document.getElementById(z);

        }
        if (n.innerText === "" || n.innerText === 'x') {
            c.innerHTML = c.innerHTML + "<b>Placing element at position " + x + "</b>";
            res.innerHTML = "<b style=\"color:green\" >Placing element at position " + x + "</b>";
            n.innerText = num;
            n.style.backgroundColor = "green";
        }
        else if (count >= 6 && !isFull()) {
            c.innerHTML = c.innerHTML + "<b>Array is Not FULL</b>";
            res.innerHTML = "<b style=\"color:red\">Function value cannot be hashed in current table</b>";
        }
        else if (n.innerText === num) {
            n.style.backgroundColor = "red";
            c.innerHTML = c.innerHTML + "<b>Element Already Present at " + x + "</b>";
            res.innerHTML = "<b style=\"color:red\">Element Already Present at " + x + "</b>";
        }
        else if (isFull()) {
            c.innerHTML = c.innerHTML + "<b>Array is FULL</b>";
            res.innerHTML = "<b style=\"color:red\">Array is FULL</b>";
        }

    }
}

function findDouble(c, num, input, res) {
    c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
    let str = input(num % 10);

    let n = document.getElementById(str);


    let x = num % 10;
    n.style.backgroundColor = "yellow";
    let count = 0

    while (count <= 9 && n.innerText !== "" && n.innerText !== num) {
        count++;
        c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + final(count - 1, num) + "</b><p> [Next Position = (" + num + " % 10 + " + (count + 1) + " * (5 - (" + num + " % 5))) % 10]</p>";
        c.innerHTML = c.innerHTML + "<p>Next Position = (" + hash1(num) + " + " + (count) + " * " + hash2(num) + ") % 10 = " + final(count, num) + "</p>";
        x = final(count, num);
        let z = input(x);
        n = document.getElementById(z);
    }
    if (n.innerText === num) {
        n.style.backgroundColor = "green";
        c.innerHTML = c.innerHTML + "<b>Element Found At Position " + x + "</b>";
        res.innerHTML = "<b style=\"color:green\">Element Found At Position " + x + "</b>";
    }
    else {
        n.style.backgroundColor = "red";
        c.innerHTML = c.innerHTML + "<b>Element Not Found</b>";
        res.innerHTML = "<b style=\"color:red\">Element Not Found</b>";
    }
}

function deleteDouble(c, num, input, res) {
    c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
    let str = input(num % 10);

    let n = document.getElementById(str);


    let x = num % 10;
    n.style.backgroundColor = "yellow";
    let count = 0

    while (count <= 9 && n.innerText !== "" && n.innerText !== num) {
        count++;
        c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + final(count - 1, num) + "</b><p> [Next Position = (" + num + " % 10 + " + (count + 1) + " * (5 - (" + num + " % 5))) % 10]</p>";
        c.innerHTML = c.innerHTML + "<p>Next Position = (" + hash1(num) + " + " + (count) + " * " + hash2(num) + ") % 10 = " + final(count, num) + "</p>";
        x = final(count, num);
        let z = input(x);
        n = document.getElementById(z);
    }
    if (n.innerText === num) {
        n.style.backgroundColor = "green";
        c.innerHTML = c.innerHTML + "<b>" + num + " Deleted Successfully</b>";
        res.innerHTML = "<b style=\"color:green\">" + num + " Deleted Successfully</b>";
        n.innerText = "x";
    }
    else {
        n.style.backgroundColor = "red";
        c.innerHTML = c.innerHTML + "<b>Element Not Found</b>";
        res.innerHTML = "<b style=\"color:red\">Element Not Found</b>";
    }
}

export { insertDouble, findDouble, deleteDouble };