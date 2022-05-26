//hide and show menu
function hideSushi() {
    document.querySelector("#Sushi").style.display = "none";
    document.querySelector("#sushilink").style.backgroundColor = "green";
    document.querySelector("#sushilink").style.color = "rgba(255,255,240,0.8)";
    return false;
}

function hideDrink() {
    let drinkStyle = document.querySelector("#Drink").style;
    let drinkLinkStyle = document.querySelector("#drinklink").style;
    drinkStyle.display = "none";
    drinkLinkStyle.backgroundColor = "green";
    drinkLinkStyle.color = "rgba(255,255,240,0.8)";
    return false;
}

function hideDessert() {
    let dessertStyle = document.querySelector("#Dessert").style;
    let dessertLinkStyle = document.querySelector("#dessertlink").style;
    dessertStyle.display = "none";
    dessertLinkStyle.backgroundColor = "green";
    dessertLinkStyle.color = "rgba(255,255,240,0.8)";
    return false;
}

function showSushi() {
    hideDrink();
    hideDessert();
    document.querySelector("#Sushi").style.display = "block";
    document.querySelector("#sushilink").style.backgroundColor = "rgba(255, 255,240, 0)";
    document.querySelector("#sushilink").style.color = "green";
    return false;
}

document.onload = showSushi();

function showDrink() {
    hideSushi();
    hideDessert();
    document.querySelector("#Drink").style.display = "block";
    document.querySelector("#drinklink").style.backgroundColor = "rgba(255,255,240,0)";
    document.querySelector("#drinklink").style.color = "green";
    return false;
}

function showDessert() {
    hideSushi();
    hideDrink();
    document.querySelector("#Dessert").style.display = "block";
    document.querySelector("#dessertlink").style.backgroundColor = "rgba(255,255,240,0)";
    document.querySelector("#dessertlink").style.color = "green";
    return false;
}

//add dishes
//need to add style to the table row
/*
function getDish(dishId) {
    dishName = dishId;
    showName = dishName.slice(0,-1);
    dishQty = document.querySelector("#"+ showName).value;
    let table = document.querySelector("#myTable");
    let row = table.insertRow(1);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    col1.innerHTML = showName;
    col2.innerHTML = dishQty;
    return false;
}
*/

/*
//count quantity
//problem with the first line
function recal() {
    let getQty = document.querySelectorAll("#myTable tbody td");
    console.log(getQty);
    let addQty = 0;
    for (let i = 0; i < getQty.length; i++) {
        let eachQty = getQty[i];
        addQty = addQty + eachQty;            
    }
    document.querySelector("#totalQty").innerHTML = addQty;
    return false;
}

document.onload = recal();
*/

//undo link
let calledNum2 = 0;
function deleteRow() {
    calledNum2++;
    let tbody = document.querySelector("tbody");
    let rowCount = tbody.rows.length;
    //console.log(trArray);
    if (rowCount == 0){
        document.querySelector("#notOrdered").innerHTML = "You Haven't Ordered Anything Yet!";
        document.querySelector("#notOrdered").style.textAlign = "center";
    }
    else {
        //console.log(rowCount);
        tbody.deleteRow(rowCount - 1);
    }
    recal();
    return false;
}

//add dishes
let calledNum = 0;
function getDish(dishId) {
    document.querySelector("#notOrdered").innerHTML = "";
    calledNum++;
    let dishName = dishId;
    let showName = dishName.slice(0,-1);
    let dishQty = document.querySelector("#"+ showName).value;
    let tbody = document.querySelector("tbody");
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement("td"));
    tr.cells[0].appendChild(document.createTextNode(showName));
    tr.cells[1].appendChild(document.createTextNode(dishQty));
    if ((calledNum + calledNum2) % 2 == 0) {
        tr.style.backgroundColor =  "rgb(57, 141, 60,0.6)";
        tr.style.color = "white";
    }
    recal();
    return false;
}

/*
//calculate
function recal(dishId) {
    //let totalQty = 0;
    let tbody = document.querySelector("tbody");

    let showName = dishName.slice(0,-1);
    let dishQty = document.querySelector("#"+ showName).value;
    let eachQty = parseFloat(dishQty);
    eachQty = isNaN(eachQty) ? 0 :eachQty;

    return;
}


//calculate
function recal() {
    let total = 0;
    let tbody = document.querySelector("tbody");

    for (let i = 0; i < tbody.rows.length; i++) {
        getNum();
    }

    function getNum() {
            let cellValue = tbody.rows[i].cells[1].innerHTML;
            cellValueNum = parseInt(cellValue);
            console.log(cellValueNum);
            return cellValueNum;
        }
    
    total += cellValue;
    document.querySelector("#totalQty").innerHTML = total;
    return false;
}
*/

//calculate
function recal() {
    let tbody = document.querySelector("tbody");
    let rowLength = tbody.rows.length;
    let i;
    let total = 0;
    for (i = 0; i < rowLength; i++) {
        total += parseInt(tbody.rows[i].cells[1].innerHTML); 
    }
    document.querySelector("#totalQty").innerHTML = total;
}

function displayTime() {
    let now = new Date();

    let monthNum = now.getMonth();
    let month;
    switch(monthNum){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "Semptember";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    let date = now.getDate();

    let dayNum = now.getDay();
    let day;
    switch(dayNum){
        case 0:
            day = "Sunday" ;
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    let hours = now.getHours(); 
    let mins = now.getMinutes(); 

    document.querySelector("#currentTime").innerHTML = hours + ":" + mins + " Today is " + month + " " + date + " " + day;
}

window.onload = displayTime();
