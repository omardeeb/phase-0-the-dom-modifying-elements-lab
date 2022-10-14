// Write your code here!
main.remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.append(newHeader);
newHeader = document.getElementById("victory");
const node = document.createTextNode("Omar is the champion");
newHeader.appendChild(node);
const element = document.getElementById("victory");
element.appendChild(newHeader);

