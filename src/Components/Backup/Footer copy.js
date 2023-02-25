import { useState } from 'react';
import './css/footer.css'

// let d = document.getElementById('title');

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

function Footer() {
    let d = document.getElementById('title');

    let res = document.getElementById('result');

    const [num, setMessage] = useState('');
    // const [selectValue, setSelectValue] = useState("");

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const insert = event => {

        event.preventDefault();
        clearColor();
        let c = document.getElementById('calc');


        if (num === "" || num < 0) {
            c.innerHTML = "<b style=\"color:red\">Please Enter Valid Number</b>"
        }
        else {

            if (d.innerText === "Hashing") {

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

            else if (d.innerText === "Linear Probing") {

                c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
                let str = input(num % 10);

                let n = document.getElementById(str);
                if (n.innerText === '') {
                    n.innerText = num;
                    n.style.backgroundColor = "green";
                    res.innerHTML = "<b style=\"color:green\">Element Added at Position " + num % 10 + "</b>";
                }
                else {
                    let x = num % 10;
                    n.style.backgroundColor = "yellow";
                    let count = 0
                    while (count <= 9 && n.innerText !== "" && n.innerText !== num && n.innerText !== 'x') {
                        c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + x + "</b><p> [Next Position = (" + num + " + " + (count + 1) + ")%10]</p>";
                        x++;
                        x = x % 10;
                        let z = input(x);
                        n = document.getElementById(z);
                        count++;

                    }
                    if (n.innerText === "" || n.innerText === 'x') {
                        c.innerHTML = c.innerHTML + "<b>Placing element at position " + x + "</b>";
                        res.innerHTML = "<b style=\"color:green\" >Placing element at position " + x + "</b>";
                        n.innerText = num;
                        n.style.backgroundColor = "green";
                    }
                    else if (n.innerText === num) {
                        n.style.backgroundColor = "red";
                        c.innerHTML = c.innerHTML + "<b>Element Already Present at " + x + "</b>";
                        res.innerHTML = "<b style=\"color:red\">Element Already Present at " + x + "</b>";
                    }
                    else if (count > 9) {
                        c.innerHTML = c.innerHTML + "<b>Array is FULL</b>";
                        res.innerHTML = "<b style=\"color:red\">Array is FULL</b>";
                    }

                }
            }

            else if (d.innerText === "Quadratic Probing") {

                c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
                let str = input(num % 10);

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
                    while (count <= 6 && n.innerText !== "" && n.innerText !== num && n.innerText !== 'x') {
                        c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + (parseInt(num) + count * count) % 10 + "</b><p> [Next Position = (" + num + " + " + (count + 1) + "<sup>2</sup>)%10]</p>";
                        
                        x = (parseInt(num) + count * count) % 10;
                        let z = input(x);
                        n = document.getElementById(z);
                        count++;


                    }
                    if (n.innerText === "" || n.innerText === 'x') {
                        c.innerHTML = c.innerHTML + "<b>Placing element at position " + x + "</b>";
                        res.innerHTML = "<b style=\"color:green\" >Placing element at position " + x + "</b>";
                        n.innerText = num;
                        n.style.backgroundColor = "green";
                    }
                    else if(count >= 6 && !isFull())
                    {
                        c.innerHTML = c.innerHTML + "<b>Array is Not FULL</b>";
                        res.innerHTML = "<b style=\"color:red\">Quadratic No Place</b>";
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
        }
    };

    const find = event => {
        clearColor();
        let c = document.getElementById('calc');
        if (d.innerText === "Hashing") {

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

        else if (d.innerText === "Linear Probing") {

            c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
            let str = input(num % 10);

            let n = document.getElementById(str);


            let x = num % 10;
            n.style.backgroundColor = "yellow";
            let count = 0
            while (count <= 9 && n.innerText !== "" && n.innerText !== num) {
                c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + x + "</b><p> [Next Position = (" + num + " + " + (count + 1) + ")%10]</p>";
                x++;
                x = x % 10;
                let z = input(x);
                n = document.getElementById(z);
                count++;
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

        else if (d.innerText === "Quadratic Probing") {

            c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
            let str = input(num % 10);

            let n = document.getElementById(str);


            let x = num % 10;
            n.style.backgroundColor = "yellow";
            let count = 0
            
            while (count <= 9 && n.innerText !== "" && n.innerText !== num) {
                c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + (parseInt(num) + count * count) % 10 + "</b><p> [Next Position = (" + num + " + " + (count + 1) + "<sup>2</sup>)%10]</p>";
                ;
                x = (parseInt(num) + count * count) % 10;
                let z = input(x);
                n = document.getElementById(z);
                count++;
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
    };

    const del = event => {
        clearColor();
        let c = document.getElementById('calc');
        if (d.innerText === "Hashing") {
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

        else if (d.innerText === "Linear Probing") {

            c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
            let str = input(num % 10);

            let n = document.getElementById(str);


            let x = num % 10;
            n.style.backgroundColor = "yellow";
            let count = 0
            while (count <= 9 && n.innerText !== "" && n.innerText !== num) {
                c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + x + "</b><p> [Next Position = (" + num + " + " + (count + 1) + ")%10]</p>";
                x++;
                x = x % 10;
                let z = input(x);
                n = document.getElementById(z);
                count++;
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


        else if (d.innerText === "Quadratic Probing") {

            c.innerHTML = "<p>position = " + num + " % 10</p> <p>position = " + (num % 10) + "</p>";
            let str = input(num % 10);

            let n = document.getElementById(str);


            let x = num % 10;
            n.style.backgroundColor = "yellow";
            let count = 0
            
            while (count <= 9 && n.innerText !== "" && n.innerText !== num) {
                c.innerHTML = c.innerHTML + "<b>Collision Occured At Position " + (parseInt(num) + count * count) % 10 + "</b><p> [Next Position = (" + num + " + " + (count + 1) + "<sup>2</sup>)%10]</p>";
                ;
                x = (parseInt(num) + count * count) % 10;
                let z = input(x);
                n = document.getElementById(z);
                count++;
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
    };

    const changeChoice = (event) => {
        Reset();
        const value = event.target.value;
        d.innerText = value;
        let func = document.getElementById('function');
        if (value === "Hashing") {
            func.innerText = "Position = Element % Size";
        }
        else if (value === "Linear Probing") {
            func.innerText = "Position = (Element + i) % Size";
        }
        else if (value === "Quadratic Probing") {
            func.innerHTML = "Position = (Element + i<sup>2</sup>) % Size";
        }
    };

    return (
        <div class="footer">
            <div id="choice">
                <select onChange={changeChoice} name="type" id="type">
                    <optgroup label="No Collision Resolution">
                        <option value="Hashing">Hashing</option>
                    </optgroup>
                    <optgroup label="Collision Resolution">
                        <option value="Linear Probing">Linear Probing</option>
                        <option value="Quadratic Probing">Quadratic Probing</option>
                    </optgroup>
                </select>
            </div>
            <input type="number" id="num" name="num" onChange={handleChange} value={num} autoComplete="off" placeholder='1' defaultValue='1' min="1" ></input>
            <button type="button" onClick={insert}>Insert</button>
            <button type="button" onClick={find}>Find</button>
            <button type="button" onClick={del}>Delete</button>
            <button type="button" onClick={Reset}>Reset</button>
        </div>
    );
}

export default Footer;