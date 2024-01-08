    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



    window.addEventListener('DOMContentLoaded', function() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyvWCK2iqwiLwbNFHLgBJLQ3NhUeIobi3w_PZwx_GWl3aEa3yhNB8XHynlUZ5tzpefQ/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function(){
                    msg.innerHTML = "";
                },5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
        });
      });
      



    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }



    $(document).ready(function() {
      var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function() {
          $('#about').addClass('animate__animated animate__fadeInLeft');
          $('#about').css('opacity', '1');
        },
        offset: '50%'
      });
    });



    $(document).ready(function() {
      var waypoint = new Waypoint({
        element: document.getElementById('services'),
        handler: function() {
          $('#services').addClass('animate__animated animate__fadeInRight');
          $('#services').css('opacity', '1');
        },
        offset: '50%'
      });
    });


    $(document).ready(function() {
      var waypoint = new Waypoint({
        element: document.getElementById('portfolio'),
        handler: function() {
          $('#portfolio').addClass('animate__animated animate__fadeInLeft');
          $('#portfolio').css('opacity', '1');
        },
        offset: '50%'
      });
    });
  

   
            $(document).ready(function() {
              var waypoint = new Waypoint({
                element: document.getElementById('contact'),
                handler: function() {
                  $('#contact').addClass('animate__animated animate__fadeIn');
                  $('#contact').css('opacity', '1');
                },
                offset: '50%'
              });
            });


           
            $(document).ready(function() {
                $('#header').hide().fadeIn(1000); // fade in over 1 second (1000ms)
              });

              


              // function to check if an element is in viewport
              function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                  rect.top >= 0 &&
                  rect.left >= 0 &&
                  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
              }
            
              // function to write the text live when scrolling
          function writeTextLive(element) {
            if (isInViewport(element) && !element.dataset.written) {
              const text = element.textContent;
              element.innerHTML = '';
              element.dataset.written = true;
              let i = 0;
              const intervalId = setInterval(() => {
                element.innerHTML += text.charAt(i);
                i++;
                if (i > text.length - 1) {
                  clearInterval(intervalId);
                }
              }, 10);
            }
          }
          
            
              // add animation classes and write text live when page loads
              window.addEventListener('load', () => {
                const elements = document.querySelectorAll('#about h1, #about p');
                elements.forEach(element => {
                  element.classList.add('animate__animated', 'animate__fadeInUp');
                });
                writeTextLive(document.querySelector('#about p'));
              });
            
              // add animation classes and write text live when scrolling
              window.addEventListener('scroll', () => {
                const elements = document.querySelectorAll('#about h1, #about p');
                elements.forEach(element => {
                  if (isInViewport(element)) {
                    element.classList.add('animate__animated', 'animate__fadeInUp');
                  }
                });
                writeTextLive(document.querySelector('#about p'));
              });
    



// Get the text content of the p and h1 tags
window.addEventListener('DOMContentLoaded', function() {
  const pText = document.querySelector('.header-text p').textContent;
  const h1Text = document.querySelector('.header-text h1').innerHTML;
  
  // Clear the text content of p and h1 tags
  document.querySelector('.header-text p').textContent = '';
  document.querySelector('.header-text h1').innerHTML = '';
  
  
  let pIndex = 0;
  let h1Index = 0;
  let isInTag = false;
  let welcomeMessageDisplayed = false;
  let portfolioSiteDisplayed = false;
  
  // Type out the text content of p tag
  function typeP() {
    if (pIndex < pText.length) {
      document.querySelector('.header-text p').textContent += pText.charAt(pIndex);
      pIndex++;
      setTimeout(typeP, 50); // adjust typing speed as needed
    }
  }
  
  // Type out the text content of h1 tag
  function typeH1() {
    if (h1Index < h1Text.length) {
      const currentChar = h1Text.charAt(h1Index);
  
      if (currentChar === '<') {
        isInTag = true;
      } else if (currentChar === '>') {
        isInTag = false;
      }
  
      if (!isInTag && currentChar !== '>') {
        if (h1Text.substring(h1Index, h1Index + 13) === 'Welcome to my') {
          document.querySelector('.header-text h1').innerHTML += '<br>';
        }
        if (h1Text.substring(h1Index, h1Index + 8) === 'Gurkirat') {
          const spanElement = document.createElement('span');
          spanElement.style.color = '#ff004f';
          for (let i = 0; i < 8; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = h1Text.charAt(h1Index + i);
            spanElement.appendChild(letterSpan);
          }
          document.querySelector('.header-text h1').appendChild(spanElement);
          h1Index += 7;
        } else {
          document.querySelector('.header-text h1').innerHTML += currentChar;
        }
        if (h1Text.substring(h1Index, h1Index + 4) === '<br>' && !welcomeMessageDisplayed) {
          welcomeMessageDisplayed = true;
          document.querySelector('.header-text h1').innerHTML += '<br>';
        } else if (h1Text.substring(h1Index, h1Index + 13) === 'Portfolio site!' && !portfolioSiteDisplayed) {
          portfolioSiteDisplayed = true;
          document.querySelector('.header-text h1').innerHTML += '<br>';
        }
      }
  
      h1Index++;
      setTimeout(typeH1, 50); // adjust typing speed as needed
    }
  }
  
  
  // Call the typeP and typeH1 functions when the page loads
  window.onload = function() {
    typeP();
    setTimeout(typeH1, 1000); // adjust delay as needed
  }});

           

            
    