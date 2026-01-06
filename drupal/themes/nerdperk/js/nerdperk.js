document.addEventListener("DOMContentLoaded", function(event) { 
	jQuery('.video-upload').parent().addClass('red-overflow');
	jQuery('.home-vid').children('.views-field').not(':first-child').wrapAll('<div class="home-vid-text">');
	if(jQuery('[data-history-node-id="1"').length>0){
		jQuery('.layout.row').addClass('row-no-gutters');
		jQuery('.region-content').addClass('red-overflow');
	}
	jQuery('.view-all-videos .views-row').each(function(index){
		if(index==0){
			jQuery(this).addClass('first-vid');
		}
		jQuery(this).addClass('all-vids');
		jQuery(this).find('.views-field').not(':first-child').wrapAll('<div class="all-vid-text" />');
	});
});
