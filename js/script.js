$(function() {
  console.log('test');
	$('.header__ham-button').on("click", function(){
		$(this).toggleClass('open');
		// $('.header__list-wrap').toggleClass('open');
		$('.header__list-cover').toggleClass('open');
	});
});

// メニューをクリックされたら、非表示にする
$(function() {
	$('.header__item').on("click", function(){
      $('.header__list-wrap').removeClass('open');
	});
});