jQuery(document).ready(function($) {
		"use strict";
		$('.image-set').magnificPopup({
			  delegate: 'a',
			  type: 'image',
			  gallery: {enabled:true}
		});
	});