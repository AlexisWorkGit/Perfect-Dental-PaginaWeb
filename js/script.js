var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}
function iniciarMap(){
		var coord = {lat:-1.6623888888888887 ,lng: -78.66169444444445};
	    var map = new google.maps.Map(document.getElementById('map'),{
	      zoom: 10,
	      center: coord
	    });
	    var marker = new google.maps.Marker({
	      position: coord,
	      map: map
	    });
	}

	jQuery(document).ready(function() {
		jQuery(document.body).SLScrollToTop({
			'image':		'',
			'text':			'⬆',
			'title':		'Go To Top',
			'className':	'scrollToTop',
			'duration':		500
		});
	});
	jQuery(document).ready(function(){
		var mySwiper = new Swiper ('#qx-carousel-3537', {
		slidesPerView: 2,slidesPerGroup: 1,spaceBetween: 30,autoplay:false,speed:5000,loop:false,navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	  },pagination: {
		el: ".swiper-pagination",
		clickable: true
	  },breakpoints:{
		1024: { 
			slidesPerView: 2,  
			slidesPerGroup: 1,
			spaceBetween: 30
		},    
		768: { 
			slidesPerView: 2,  
			slidesPerGroup: 1,
			spaceBetween: 30
		},
		480: { 
			slidesPerView: 2,  
			slidesPerGroup: 1,
			spaceBetween: 30
		},
	  }              
		});
	});
	jQuery(document).ready(function(){
		var mySwiper = new Swiper ('#qx-carousel-1072', {
		slidesPerView: 1,slidesPerGroup: 1,spaceBetween: 30,autoplay:true,speed:2000,loop:false,navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	  },pagination: {
		el: ".swiper-pagination",
		clickable: true
	  },breakpoints:{
		1024: { 
			slidesPerView: 1,  
			slidesPerGroup: 1,
			spaceBetween: 30
		},    
		768: { 
			slidesPerView: 1,  
			slidesPerGroup: 1,
			spaceBetween: 30
		},
		480: { 
			slidesPerView: 1,  
			slidesPerGroup: 1,
			spaceBetween: 30
		},
	  }              
		});
	});
	var at_template = "atdental";
	var at_template_uri = "http://demo3.agethemes.com/joomla/at-dental/templates/atdental";
	
	jQuery(function($){$('.helix3-toggler').on('click',function(event){event.preventDefault();$(this).parent().parent().toggleClass('opened');});var presets=$('.helix3-presets').find('li');presets.each(function(){$(this).find('a').on('click',function(event){event.preventDefault();var currentPreset=$(this).parent().data('preset');presets.removeClass('active');$(this).parent().addClass('active');$('.sp-default-logo').removeAttr('src').attr('src',at_template_uri+'/images/presets/preset'+ currentPreset+'/logo.png');$('.sp-retina-logo').removeAttr('src').attr('src',at_template_uri+'/images/presets/preset'+ currentPreset+'/logo@2x.png');$('.preset').removeAttr('href').attr('href',at_template_uri+'/css/presets/preset'+ currentPreset+'.css');$.removeCookie(at_template+'_preset');$.cookie(at_template+'_preset','preset'+ currentPreset,{expires:1});});});$('#helix3-boxed').on('change',function(){if($(this).is(':checked')){$('body').addClass('layout-boxed');}else{$('body').removeClass('layout-boxed');}});$('.helix3-bg-images li').on('click',function(event){event.preventDefault();var $this=$(this);if($('#helix3-boxed').is(':checked')){$('body').removeAttr('style').css({'background':'url('+ $this.data('bg')+') no-repeat 50% 50%','background-attachment':'fixed','background-size':'cover'});$('.helix3-bg-images li').removeClass('active');$this.addClass('active');}else{alert('This option required Select Boxed Layout');}});$('#helix3-boxed').on('change',function(){if($(this).is(':checked')){$('body').addClass('layout-boxed');}else{$('body').removeClass('layout-boxed').removeAttr('style');$('.helix3-bg-images li').removeClass('active');}});});
	jQuery(".template-options").click(function(){
		$(this).toggleClass("opened");
	});