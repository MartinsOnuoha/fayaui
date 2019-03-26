
$(function () {


	// tabs
	$('.tab_content').hide();
	$('.tab_content:first').show(); //show first tab
	$('.tab_header a:first-child').addClass('active'); //make first nav link active

    $('.tab_content_2').hide();
    $('.tab_content_2:first').show();
    $('.tab_header_2 a:first-child').addClass('active');

    $('.tab_content_details').hide();
    $('.tab_content_details:first').show();
    $('.tab_header_details a:first-child').addClass('active');

    $('.tab_content_modal').hide();
    $('.tab_content_modal:first').show();
    $('.tab_header_modal a:first-child').addClass('active');

    // second tab controller
    $('.tab_header_2 a').click(function() {
        var $this = $(this).attr('href');
        $('.tab_content_2').hide();
        $($this).fadeIn(1000);

        $('.tab_header_2 a').removeClass('active');
        $(this).addClass('active');
    });

    // details tab controller
    $('.tab_header_details a').click(function() {
        var $this = $(this).attr('href');
        $('.tab_content_details').hide();
        $($this).fadeIn(1000);

        $('.tab_header_details a').removeClass('active');
        $(this).addClass('active');
    });

    // modal tab controller
    $('.tab_header_modal a').click(function() {
        var $this = $(this).attr('href');
        $('.tab_content_modal').hide();
        $($this).fadeIn(1000);

        $('.tab_header_modal a').removeClass('active');
        $(this).addClass('active');
    })

	$('.tab_header a').click(function() {
		var $this = $(this).attr('href');
		$('.tab_content').hide(); 
		$($this).fadeIn(1000); 

		$('.tab_header a').removeClass('active'); 
		$(this).addClass('active');

		// return false;
	});

    // Time slots media house select
    $('.one_media').click(function() {

        $('.one_media').removeClass('active');
        $(this).addClass('active');

    });

    //Scroll
	$('.click_nav').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top - 95
	            }, 500);
	            return false;
	        }
	    }
	});


    jQuery( document ).ready(function( $ ) {
        $('.modal_click').on('click', function () {
            var ref = $(this).attr('href');
            $(ref).modal();
            return false;
        });
    });

    //avatar image upload
    function readURL(input, targ) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                targ.attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    // show image selection before upload
    $(document).on("change", ".upload_profile", function() {

        var target = $(this).parent('.profile_hold').find('.target');
        readURL(this, target); //show preview image
    });

});
