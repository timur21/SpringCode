$(document).ready(function(){
  $('.submit-btn').click(function(event){

    console.log("clicked");

    $('.status').style.display = "block";


    var name = $('.name').val();
    var email = $('.email').val();
    var phone = $('.phone').val();
    var message = $('.message').val();
    var statusElm = $('.status');
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>');
    }else{
      event.preventDefault();
      statusElm.append('<div>Email is not valid</div>');
    }

    if (name.length >= 2) {
      statusElm.append('<div>Name is valid</div>');
    }else{
      event.preventDefault();
      statusElm.append('<div>Name is not valid</div>');
    }

    if (message.length >= 10) {
      statusElm.append('<div>Message is valid</div>');
    }else{
      event.preventDefault();
      statusElm.append('<div>Message is not valid</div>');
    }

  })

})
