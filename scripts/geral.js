/* global $*/

$(document).ready(function(){
  $(".button-collapse").sideNav();
  
  $(".categories a").on({
      click: function () {
          event.preventDefault();
      }
  });
})