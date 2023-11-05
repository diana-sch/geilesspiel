function validateForm() {
    var x = document.forms["playerNames"]["playerName1"].value;
    var y = document.forms["playerNames"]["playerName2"].value;

    if (x == "" || y == "") {
      alert("Names must be filled out");
      return false;
    }
  }

function getNames() {
    var player1 = document.getElementsByClassName("playerNames")[0].value;
    var player2 = document.getElementsByClassName("playerNames")[1].value;
    draw(player1, player2);
}

document.getElementById("start").addEventListener("click", getNames);

function draw(player1name, player2name) {
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("momo").innerHTML = player1name;
}
