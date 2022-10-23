// function cashHandler() {
//     console.log("JS is working");
// }
// function resetRegister() {
//     console.log("reset button is working!");
// }





function cashHandler() {
    
    let count500 = 0
        , count2000 = 0
        , count100 = 0
        , count20 = 0
        , count10 = 0
        , count5 = 0
        , count1 = 0;
    let bill = document.querySelector("#bill").value
    let givenAmt = document.querySelector("#givenAmt").value
    let change = givenAmt - bill
    console.log("bill:" + bill + " givenAmt:" + givenAmt + " change:" + change);
    resetRegister()
    document.getElementById("billAmt").innerText = "Bill Amount : " + bill
    document.getElementById("amtGiven").innerText = "Money Given : " + givenAmt
    if (change < 0) {
        document.getElementById("change").innerText = "Asshole don't be oversmart your bill is " + bill + " and you are giving me " + givenAmt + " so simply cough up the remaining " + (bill - givenAmt)
    }else document.getElementById("change").innerText = "Change : "
    if (change >= 2000) {
        count2000 = Math.floor(change / 2000)
        change = change % 2000
        document.getElementById("2000note").innerText = count2000 + " note/notes of ₹2000"
        console.log(count2000 + " " + change);
    }
    if (change >= 500) {
        count500 = Math.floor(change / 500)
        change = change % 500
        document.getElementById("500note").innerText = count500 + " note/notes of ₹500"
        console.log(count500 + " " + change);
    }
    if (change >= 100) {
        count100 = Math.floor(change / 100)
        change = change % 100
        document.getElementById("100note").innerText = count100 + " note/notes of ₹100"
        console.log(count100 + " " + change);
    }
    if (change >= 20) {
        count20 = Math.floor(change / 20)
        change = change % 20
        document.getElementById("20note").innerText = count20 + " note/notes of ₹20"
        console.log(count20 + " " + change);
    }
    if (change >= 10) {
        count10 = Math.floor(change / 10)
        change = change % 10
        document.getElementById("10note").innerText = count10 + " note/notes of ₹10"
        console.log(count10 + " " + change);
    }
    if (change >= 5) {
        count5 = Math.floor(change / 5)
        change = change % 5
        document.getElementById("5note").innerText = count5 + " note/notes of ₹5"
        console.log(count5 + " " + change);
    }
    if (change >= 1) {
        count1 = Math.floor(change / 1)
        change = change % 1
        document.getElementById("note").innerText = count1 + " note/notes of ₹1"
        console.log(count1 + " " + change);
    }
    
    
    console.log(count2000);
    console.log(count500);
    console.log(count100);
    console.log(count20);
    console.log(count10);
    console.log(count5);
    console.log(count1);
    
    
    
}

function resetRegister() {
    console.log("pressed");
    document.getElementById("bill").value = null;
    document.getElementById("givenAmt").value = null;
    document.getElementById("2000note").innerText = null
    document.getElementById("500note").innerText = null
    document.getElementById("100note").innerText = null
    document.getElementById("20note").innerText = null
    document.getElementById("10note").innerText = null
    document.getElementById("5note").innerText = null
    document.getElementById("note").innerText = null
    document.getElementById("billAmt").innerText = null
    document.getElementById("amtGiven").innerText = null
    document.getElementById("change").innerText = null

}