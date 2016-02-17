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
    $('.main').show();
    $('.menu').hide();
  });
}

function switchMenu() {
  $('.main-menu').children('li').on('click', function () {
    $('.main').hide();
    $('.menu').show();
  });
}

function dropDown() {
  $('.menu-nav').on('click', function(){
    $(this).find('.sub-nav').toggle('slow');
  });
}

function renderProjects() {
  $('.projects-link').on('click', function () {
    $('.contents').empty();
    $('.contents').append($('.projects'));
    $('.projects').show();
  });
}

function renderContact() {
  $('.contact-link').on('click', function () {
    $('.contents').empty();
    $('.contents').append($('.contact'));
    $('.contact').show();
  });
}
