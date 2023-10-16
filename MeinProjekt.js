document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("h1, p, a");
  
    elements.forEach(function(element) {
      // Beispiel: Ändere die Schriftfarbe auf Rot
      element.style.color = "red";
      // Beispiel: Ändere die Schriftgröße auf 20 Pixel
      element.style.fontSize = "20px";
      // Beispiel: Füge einen Hintergrundfarbe hinzu
      element.style.backgroundColor = "lightblue";
      // Beispiel: Setze den Text in Fettschrift
      element.style.fontWeight = "bold";
      // Beispiel: Ändere den Abstand zwischen den Elementen
      element.style.marginBottom = "10px";
    });
  });