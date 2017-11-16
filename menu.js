jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('nav-guide');
		jQuery('#logo-guide ul').toggleClass('nav-guide');

		e.preventDefault();
	});
});
