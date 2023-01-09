var fName = "";
var people = 0;
var ListName = []; 

while (fName != "David") {
    people++;
    fName = prompt("What is your Name ?");
    ListName.push(fName);

}
alert(ListName + " , \nIt took " + people + " tries until i found a David ");
