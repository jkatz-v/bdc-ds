/** Error Page Footer */
class ErrorFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>
          <div class="white-footer blue">
              <div class="footer-inner container">
                  <div class="footer-links dark-blue">
                      <p>Contact</p>
                      <p>Privacy</p>
                      <p>Terms of Use</p>
                      <p>Do not sell or share my data</p>
                      <p>©bet-david consulting. All Rights Reserved 2023.</p>
                  </div>
                  
              </div>
          </div>
       </footer>    
        `;
    }
  }
  
  customElements.define('error-footer', ErrorFooter);