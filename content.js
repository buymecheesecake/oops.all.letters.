function mutateTextNodes() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";
    const elements = document.body.querySelectorAll("*:not(script):not(style):not(noscript)");
  
    elements.forEach(el => {
      for (const node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) {
          const scrambled = [...node.nodeValue].map(ch => {
            return ch.trim() ? characters[Math.floor(Math.random() * characters.length)] : ch;
          }).join("");
  
          const span = document.createElement("span");
          span.className = "dna-letter";
          span.textContent = scrambled;
          el.replaceChild(span, node);
        }
      }
    });
  }
  
  mutateTextNodes();
  