window.addEventListener('DOMContentLoaded', function() {
    var elements = document.getElementsByClassName('introduction');
    for (var i = 0; i < elements.length; i++) {
      wrapText(elements[i], 100); // Set the number of characters before line break
    }
  });

  function wrapText(element, charactersPerLine) {
    var text = element.textContent;
    var wrappedText = '';
    for (var i = 0; i < text.length; i++) {
      wrappedText += text[i];
      if ((i + 1) % charactersPerLine === 0) {
        wrappedText += '<br>';
      }
    }
    element.innerHTML = wrappedText;
  }