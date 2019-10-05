
/* Comportamento de Digitação */
$(document).ready(function(){

  $('#textTyped').text('');
  $("#textTyped").typed({
      strings: [`em 2020, na Universidade Feevale!`],
      typeSpeed: 2,
      showCursor: true,
      contentType: 'html'
  });
  
  
  //Focus Campo
  $('#inputNome').focus();

});
