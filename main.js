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


  //Navbar scroll effect 

  // const body = document.body; 
  // let lastscroll = 0; 

  // window.addEventListener('scroll', () => {
  //   const currentScroll = window.pageYOffset;
  //   if (currentScroll <= 0) {
  //     body.children.remove("scroll-up");
  //     return; 
  //   }
  //   if (currentScroll > lastscroll && !body.classList.contains("scroll-down")) {
  //     body.children.remove("scroll-down");
  //     body.children.add("scroll-down");
  //   } else if (currentScroll < lastscroll && body.classList.contains("scroll-down")) {
  //     body.children.remove("scroll-down");
  //     body.children.add("scroll-up");
  //   }
  //   lastscroll = currentScroll;
  // })