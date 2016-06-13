/**
 * 19/03/2016
 *
 * Edit By Okta Maulana
 */

// parallax
(function($){
  $(function(){
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// scrollspy
(function($){
  $(function(){

    $('.button-collapse').sideNav({
	//menuWidth: 300, // Default is 240
      	//edge: 'right', // Choose the horizontal origin
      	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// modal
(function($){
  $(function(){

  	$('.modal-trigger').leanModal({
    	  dismissible: true, // (true) Modal akan tertutup jika klik di luar area modal, (false) sebaliknya
    	  opacity: .9, // Opacity of modal background
    	  in_duration: 500, // Transition in duration
    	  out_duration: 500, // Transition out duration
    	  //ready: function() { alert('Ready'); }, <-------Callback for Modal open
    	  //complete: function() { alert('Closed'); } <-------Callback for Modal close
    	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

// sliding image
(function($){
  $(function(){

    $('.slider').slider({full_width: true});
    // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');

  }); // end of document ready
})(jQuery); // end of jQuery name space
