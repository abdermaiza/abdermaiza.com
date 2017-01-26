
jQuery(document).ready(function ($) {

  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

  $('.modal-button').click(function() {
    var target = $(this).data('target');
    $('html').addClass('is-clipped');
    $(target).addClass('is-active');
  });

  $('.modal-background, .modal-close').click(function() {
    $('html').removeClass('is-clipped');
    $(this).parent().removeClass('is-active');
  });

  $('.modal-card-head .delete, .modal-card-foot .button').click(function() {
    $('html').removeClass('is-clipped');
    $('#modal-ter').removeClass('is-active');
  });

  var $highlights = $('.highlight');

  $highlights.each(function() {
    var $el = $(this);
    var copy = '<button class="copy">Copy</button>';
    var expand = '<button class="expand">Expand</button>';
    $el.append(copy);

    if ($el.find('pre code').innerHeight() > 600) {
      $el.append(expand);
    }
  });

  var $highlightButtons = $('.highlight .copy, .highlight .expand');

  $highlightButtons.hover(function() {
    $(this).parent().css('box-shadow', '0 0 0 1px #ed6c63');
  }, function() {
    $(this).parent().css('box-shadow', 'none');
  });

  $('.highlight .expand').click(function() {
    $(this).parent().children('pre').css('max-height', 'none');
  });

  new Clipboard('.copy', {
    target: function(trigger) {
      return trigger.previousSibling;
    }
  });
// code personnalisé pour les skills au clic, la nav-menu au clic et les projets au survol
	$('.notification .button').on('click', function(){
		$(this).siblings('.info-skill').toggleClass('is-hidden');
	});

  $('#nav-menu .nav-item').on('click', function(){
    $('.nav-menu').removeClass('is-active');
  });

  $('.projects-img').hover(function(){
    $(this).parents('a').siblings('.details').toggleClass('white');
  });

  $('.projects-img').hover(function(){
    $(this).parents('a').siblings('.title').toggleClass('scale');
  });


});