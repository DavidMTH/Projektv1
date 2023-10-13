const listElement = document.querySelectorAll("li");

for (var i = 0; i< listElement.length; i++){
    var aktuellerElelement = listElement[i];
    if (aktuellerElelement.textContent.indexOf("unvollstaendig") !== -1){

        console.log(aktuellerElelement);
        aktuellerElelement.style.background = "Red";
    }
    else 
    aktuellerElelement.style.background = "green";
}
const liElemente2 = document.querySelectorAll("div li");
for (var i = 0; i < liElemente2.length; i++) {
        var aktuellerElement = liElemente2[i];

        if (aktuellerElement.textContent.indexOf("Fehler") !== -1) {
            aktuellerElement.style.background = "blue";
        }
        else {
            aktuellerElement.style.background = "yellow";
        }
    }