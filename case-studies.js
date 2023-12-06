/** Case studies contact button **/
class CSbutton extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <button class="red-bg"><a href="contact.html">GET ME IN TOUCH WITH AN AGENT <img src="imgs/chevron-right.svg"></a></button>
        `;
    }
  }
  
  customElements.define('cs-button', CSbutton);