console.log('loaded');

$(document).ready(function() {
  $('header').hide().show('slow');
  switchMenu();
  getHome();
  dropDown();
  renderProjects();
  renderContact();
});

function getHome() {
  $('.my-name').on('click', function () {
    location.reload(true);
  });
}

function switchMenu() {
  $('.main-menu').children('li').on('click', function () {
    $('.main').hide();
    $('.ul-menu').show();
  });
}

function dropDown() {
  $('.menu-nav').on('click', function(){
    $(this).find('.sub-nav').toggle('slow');
  });
}

function renderProjects() {
  $('.projects-link').on('click', function () {
    $('.contact-section').hide();
    $('.project-display').show('slow');
  });
  viewProject();
}

function renderContact() {
  $('.contact-link').on('click', function () {
    $('.project-display').hide();
    $('.contact-section').show('slow');
  });
}



// PROJECTZ

function viewProject() {

  $('.project').each(function(index){
      $(this).attr('id', 'proj' + (index));
    });


$('.project').click(function(){
if ($(this).hasClass('opened')){
      $(this).removeClass('opened');
      $('.project').fadeIn('fast');
  }
else{
	  $(".project").index(this);
    $(this).addClass('opened');
    $('.opened').find('.links').fadeIn('fast');
    $(".project").not(this).removeClass('opened');
  }
});

};
