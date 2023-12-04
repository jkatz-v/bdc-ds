/** Reusable Navigation **/
class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="top-header">
      <div class="container">
        <div class="top-header-inner">
            <a href="index.html"><img src="imgs/bdc-logo.svg" width="130"></a>
            <ul class="top-menu">
              <li><a href="philosophy.html">Our Philosophy</a></li>
              <li class="has-submenu"><a href="#">Services</a>
                  <ul class="submenu hidden">
                      <li><a href="strategy-sessions.html">Strategy Sessions</a></li>
                      <li><a href="events.html">Events</a></li>
                      <li><a href="academy.html">Bet-David Academy</a></li>
                      <li><a href="consulting.html">1:1 Consulting</a></li>
                      <li><a href="case-studies-main.html">Case Studies</a></li>
                  </ul>
              </li>
              <li class="has-submenu"><a href="about.html">About</a>
                <ul class="submenu hidden">
                  <li><a href="expert-patrick.html">Patrick Bet-David</a></li>
                  <li><a href="expert-thomas.html">Thomas Ellsworth</a></li>
                </ul>
              </li>
              <li><a href="https://valuetainment.com/jobs/" target="_blank">Careers</a></li>
            </ul>
            <div class="top-header-inner-inner">
              <div id="burger-menu">
                <span></span>
              </div>
            
              <div id="menu">
                  <ul>
                    <li><a href="philosophy.html">Our Philosophy</a></li>
                    <li class="white-bg"><a href="#">Services</a>
                        <ul>
                            <li><a href="strategy-sessions.html">Strategy Sessions</a></li>
                            <li><a href="events.html">Events</a></li>
                            <li><a href="academy.html">Bet-David Academy</a></li>
                            <li><a href="consulting.html">1:1 Consulting</a></li>
                            <li><a href="case-studies-main.html">Case Studies</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="https://valuetainment.com/jobs/" target="_blank">Careers</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
  </nav>
      `;
    /** Burger Menu **/
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });


    /** Top Nav **/
    const submenuItems = document.querySelectorAll('.has-submenu');

    submenuItems.forEach(item => {
      const submenu = item.querySelector('.submenu');

      // Show submenu when hovering over "has-submenu" or the submenu itself
      item.addEventListener('mouseover', () => {
        submenu.classList.add('visible');
      });

      // Hide submenu when mouse leaves "has-submenu" or the submenu itself
      item.addEventListener('mouseleave', () => {
        submenu.classList.remove('visible');
      });
    });
  }
}

customElements.define('main-nav', Nav);

/** Big Reusable Footer **/
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
      <footer>
      <div class="footer-top">
           <div class="f-two-cols container">
              <div class="f-col-content">
                  <div class="red-line-header"><img src="imgs/red-line.svg" width="35">level up your leadership skills</div>
                  <div class="f-support-title dark-blue">
                      Learn about  
                      <p class="red">yourself</p> 
                  </div>
                  <div class="f-support-paragraph dark-blue">
                      What kind of leader are You?
                      What is your sales style?
                  </div>
                  <a href="https://quiz.pbdquiz.com/sf/2fc04c39" target="_blank"><button class="red-bg">Start the quiz <img src="imgs/chevron-right.svg"></button></a>
              </div>
              <div class="f-col-quote">
                  <svg class="quote-icon" xmlns="http://www.w3.org/2000/svg" width="100" height="85" viewBox="0 0 100 85" fill="none">
                      <g opacity="0.2">
                        <g style="mix-blend-mode:hard-light">
                          <path d="M9.15569 27.6858L9.15523 27.6865C3.31365 37.2091 0.375 46.2405 0.375 54.7744C0.375 63.6838 2.6637 70.8691 7.27692 76.2917L7.28089 76.2963C11.9781 81.6413 18.099 84.312 25.6099 84.312C31.9881 84.312 37.0366 82.3303 40.7065 78.3342L40.709 78.3314C44.3629 74.2715 46.1836 69.2391 46.1836 63.2602C46.1836 57.9172 44.5214 53.3649 41.1896 49.6261C37.8496 45.7981 33.5627 43.8817 28.3589 43.8817C27.3764 43.8817 25.3677 44.0837 22.3591 44.4792C21.5837 44.4727 20.6246 44.1508 19.4684 43.4571L19.4602 43.4522L19.4519 43.4478C18.4363 42.9061 17.8576 41.7284 17.8576 39.715C17.8576 33.7986 21.0107 27.5538 27.4305 20.975C31.0734 17.3324 36.7099 12.8056 44.3521 7.39236L44.6217 7.2014L44.4662 6.90988L41.5978 1.53154L41.4237 1.20522L41.095 1.37471C25.7657 9.27887 15.102 18.0432 9.15569 27.6858Z" stroke="#343949" stroke-width="0.75"/>
                        </g>
                        <g style="mix-blend-mode:hard-light">
                          <path d="M62.4606 27.6858L62.4602 27.6865C56.6186 37.2091 53.6799 46.2405 53.6799 54.7744C53.6799 63.6838 55.9686 70.8691 60.5818 76.2917L60.5858 76.2963C65.283 81.6413 71.404 84.312 78.9149 84.312C85.2931 84.312 90.3415 82.3303 94.0114 78.3342L94.0139 78.3314C97.6679 74.2715 99.4885 69.2391 99.4885 63.2602C99.4885 57.9172 97.8263 53.3649 94.4945 49.6261C91.1546 45.7981 86.8677 43.8817 81.6638 43.8817C80.6813 43.8817 78.6727 44.0837 75.664 44.4792C74.8886 44.4727 73.9296 44.1508 72.7733 43.4571L72.7652 43.4522L72.7568 43.4478C71.7413 42.9061 71.1626 41.7284 71.1626 39.715C71.1626 33.7986 74.3157 27.5538 80.7354 20.975C84.3784 17.3324 90.0148 12.8056 97.657 7.39236L97.9266 7.2014L97.7712 6.90988L94.9027 1.53154L94.7287 1.20522L94.4 1.37471C79.0707 9.27887 68.4069 18.0432 62.4606 27.6858Z" stroke="#343949" stroke-width="0.75"/>
                        </g>
                      </g>
                    </svg>
                  <div class="f-quote">"You must act like a great company or a great entrepreneur long before you ever become one."</div>
                  <img class="pbd-signature" src="imgs/pbd-signature.png">
              </div>
           </div>
      </div>
      <div class="diagonal-footer blue">
          <div class="footer-inner container">
              <div class="footer-links dark-blue">
                  <a class="dark-blue" href="contact.html"><p>Contact</p></a>
                  <a class="dark-blue" href="privacy.html"><p>Privacy</p></a>
                  <a class="dark-blue" href="terms-of-use.html"><p>Terms of Use</p></a>
                  <a class="dark-blue" href="privacy.html"><p>Do not sell or share my data</p></a>
                  <p>©bet-david consulting. All Rights Reserved 2023.</p>
              </div>
              <div class="chess-pieces">
                  <img src="imgs/footer-chess.svg">
              </div>
          </div>
      </div>
      
     </footer>    
      `;
  }
}

customElements.define('main-footer', Footer);


/** Contact Page Footer */
class ContactFooter extends HTMLElement {
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

customElements.define('contact-footer', ContactFooter);