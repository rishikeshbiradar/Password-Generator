let password;
let randomCharacter
content = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$^&<>?;";

// Funtion For Unchecking The Checkbox
function check()
{
    document.getElementById("UpperCase").checked = false
    document.getElementById("LowerCase").checked = false
    document.getElementById("number").checked = false
    document.getElementById("symbol").checked = false
    document.getElementById("mix").checked = false
}

// Function For Selecting The Customization
function UpperCase()
{
    check();
    content = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("UpperCase").checked = true
    generate();
}
function LowerCase()
{
    check();
    content = "abcdefghijklmnopqrstuvwxyz";
    document.getElementById("LowerCase").checked = true
    generate();
}
function numbers()
{
    check();
    content = "1234567890";
    document.getElementById("number").checked = true
    generate();
}
function symbol()
{
    check();
    content = "!@#$^&<>?;";
    document.getElementById("symbol").checked = true
    generate();
}
function mixed()
{
    check();
    content = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$^&<>?;";
    document.getElementById("mix").checked = true
    randomCharacter = content;
    password = "";
    let passwordLength = document.getElementById("passwordLength");

    x="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i <1 ; i++)
    {
        password = password + x.charAt(Math.random() * x.length);
    }
    x="abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i <1 ; i++)
    {
        password = password + x.charAt(Math.random() * x.length);
    }
    x="1234567890"
    for (let i = 0; i <1 ; i++)
    {
        password = password + x.charAt(Math.random() * x.length);
    }
    x="!@#$^&<>?";
    for (let i = 0; i <1 ; i++)
    {
        password = password + x.charAt(Math.random() * x.length);
    }
    
    for (let i = 0; i <passwordLength.value-4 ; i++)
    {
        password = password + randomCharacter.charAt(Math.random() * randomCharacter.length);
    }
    var showCaptcha = document.getElementById("passwordPrinter");
    showCaptcha.innerHTML = `<span id="password">${password}</span> `;
}

// Function For Generating The Password
function generate()
{
    randomCharacter = content;
    password = "";
    let passwordLength = document.getElementById("passwordLength");
    for (let i = 0; i <passwordLength.value ; i++)
    {
        password = password + randomCharacter.charAt(Math.random() * randomCharacter.length);
    }
    var showCaptcha = document.getElementById("passwordPrinter");
    showCaptcha.innerHTML = `<span id="password">${password}</span> `;
}

function gen()
{
    generate()
}
generate();

function show_value2(x)
{
 document.getElementById("slider_value2").innerHTML=x;
}
