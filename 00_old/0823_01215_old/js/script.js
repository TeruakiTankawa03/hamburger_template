$(function() {
  console.log('test');
	$('.l-header__ham-button').on("click", function(){
		$(this).toggleClass('open');
		// $('.header__list-wrap').toggleClass('open');
		$('.l-header__list-cover').toggleClass('open');
	});
});

// メニューをクリックされたら、非表示にする
$(function() {
	$('.l-header__item').on("click", function(){
		$('.l-header__navigation').removeClass('open');
	});
});