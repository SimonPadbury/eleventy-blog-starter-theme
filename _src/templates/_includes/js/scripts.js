document.addEventListener("DOMContentLoaded", () => {

  /**
   * Site Navigation Toggle (Phones)
   */

  let toggle = document.querySelector('#site-navigation-toggle');
  let menu = document.querySelector('#site-navigation-menu');

  document.body.classList.add('js');

  toggle.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active'); 
      this.setAttribute('aria-expanded', 'true');
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 720px)').matches) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-active');
    }
  });

  /**
   * Theme Switcher
   */

  let themeToggle = document.querySelectorAll("#theme-toggle");

  themeToggle.forEach(element => {
    element.addEventListener("click", function() {
      if ( sessionStorage.getItem("ebstTheme") === "dark" ) {
        themeLight();
      } else {
        themeDark();
      }
    });
  });
  
  function themeDark() {
    sessionStorage.setItem("ebstTheme", "dark");
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  }

  function themeLight() {
    sessionStorage.setItem("ebstTheme", "light");
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }
  
  function themePref() {
    if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
      themeDark();
    } else
    if ( window.matchMedia('(prefers-color-scheme: light)').matches ) {
      themeLight();
    } else {
      // Default is light
      themeLight();
    }
  }

  function themeInit() {
    if ( sessionStorage.getItem("ebstTheme") === "dark" ) {
      themeDark();
    } else if ( sessionStorage.getItem("ebstTheme") === "light" ) {
      themeLight();
    } else {
      themePref();
    }
  }
  themeInit();

});