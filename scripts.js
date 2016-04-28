console.log('loaded');

$(document).ready(function() {
  // $('header').hide().show('slow');
  // switchMenu();
  // getHome();
  dropDown();
  // renderProjects();
  // renderContact();
  // ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
// var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  // if (isFirefox) {
  //   //Set delta for Firefox
  //   delta = evt.detail * (-120);
  // } else if (isIe) {
  //   //Set delta for IE
  //   delta = -evt.deltaY;
  // } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  // }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll");
}


});

// function getHome() {
//   $('.my-name').on('click', function () {
//     location.reload(true);
//   });
// }
//
// function switchMenu() {
//   $('.main-menu').children('li').on('click', function () {
//     $('.main').hide();
//     $('.ul-menu').show();
//   });
// }
//
function dropDown() {
  $('.ul-menu').on('click', function(){
    $(this).find('.sub-nav').toggle('slow');
  });
}
//
// function renderProjects() {
//   $('.projects-link').on('click', function () {
//     $('.contact-section').hide();
//     $('.project-display').show('slow');
//   });
//   viewProject();
// }
//
// function renderContact() {
//   $('.contact-link').on('click', function () {
//     $('.project-display').hide();
//     $('.contact-section').show('slow');
//   });
// }
//
//
//
// // PROJECTZ
//
// function viewProject() {
//
//   $('.project').each(function(index){
//       $(this).attr('id', 'proj' + (index));
//     });
//
//
// $('.project').click(function(){
// if ($(this).hasClass('opened')){
//       $(this).removeClass('opened');
//       $('.project').fadeIn('fast');
//   }
// else{
// 	  $(".project").index(this);
//     $(this).addClass('opened');
//     $('.opened').find('.links').fadeIn('fast');
//     $(".project").not(this).removeClass('opened');
//   }
// });
//
// };
