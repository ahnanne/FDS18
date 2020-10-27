// 변수는 일을 시키기 전까지 무언가를 담아두는 역할
var section = $('.board section');
var tab = $('.board .tab a');
var item = $('.board li');

// icon 추가하기
tab.click(function(event) {
    event.preventDefault();
    section.removeClass('is-active');
    $(this).parent().parent().addClass('is-active');
    // jQuery의 chaining 기법
});
item.addClass('icon-dot-circled');