var submit = document.getElementById('submit')
var display = document.getElementById('display')
var note = document.getElementById('note')


function calculate() {

    var name = document.getElementById('name').value
    var pname = document.getElementById('pname').value

    var r = Math.floor(Math.random() * 101)

    if (name === "" || pname === "") {

        alert("enter both the names")
    } else {
        if (r < 10) {
            note.innerHTML = " Not true  "
            display.innerHTML = r + "%";
        } else if (r <= 50) {
            note.innerHTML = "Need to work hard on your Relation"
            display.innerHTML = r + "%";
        } else if (r > 50 && r <= 80) {

            note.innerHTML = "Be with each other you can be more better with each other"
            display.innerHTML = r + "%";
        } else if (r > 80 && r <= 95) {

            note.innerHTML = "perfect for each other"
            display.innerHTML = r + "%";
        } else if (r > 95) {

            note.innerHTML = " Perfect couple         "
            display.innerHTML = r + "%";
        }
    }

}