
(function($) {

	$(contentLoad);

	function contentLoad() {
		//var b = $('body')
		//b.addClass('container');

		$('body')

		$('.like').click(function(event) {

			$(this).toggleClass('btn-danger btn-default');

		});
    	$('.fav').click(function(event) {

  			$(this).toggleClass('btn-warning btn-default');

  	});
  	$('.retweet').click(function(event) {

    			$(this).toggleClass('btn-success btn-default');

    		});
	$('.list').click(function(event) {

        $(this).toggleClass('btn-primary btn-default');

      });
	}


})(jQuery);
