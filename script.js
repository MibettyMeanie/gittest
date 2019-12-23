var button = document.getElementById("submit");
button.onclick = display;

function display(){
    var name = document.getElementById("name").value;
    var change = document.getElementById("change");
    change.innerHTML = name;
}
    