$(function(){
    // 공통팝업
    $('.layer').on('click', function() {
        var target = $(this).data('target');
        $(target).show();
     });
     $('.layer-wrap .btn_close, .layer-wrap .btn_cancel').on('click', function() {
        $(this).closest('.layer-wrap').hide();
     });
     
     // 탭
     $('ul.tab li').on('click', function() {
         var activeTab = $(this).attr('data-tab');
         $(this).parent('ul.tab').find('li').removeClass('current');
         $(this).parent('ul.tab').siblings('.tabcontent').removeClass('current');
         $(this).addClass('current');
         $('#' + activeTab).addClass('current');
     });
     
     //패밀리사이트
     $('#familySite').on('change', function() {
         var selectUrl = $(this).val();
         if(selectUrl) {
             window.open(selectUrl, '_blank');
         }
     });
});

// 슬라이드
var slideIndex = 1;
function plusDivs(target, n) {
  showDivs(target, slideIndex += n);
}
function currentDiv(target, n) {
  showDivs(target, slideIndex = n);
}
function showDivs(target, n) {
  var i;
  var x = $(target).find(".mySlides");
  //var dots = document.getElementsByClassName(".demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  /*for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }*/
  x[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " w3-white";
}