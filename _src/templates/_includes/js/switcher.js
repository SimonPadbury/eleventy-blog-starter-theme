document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.querySelectorAll("#theme-toggle");

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
    } else {
      themeLight();
    }
  }

  themeInit();

});