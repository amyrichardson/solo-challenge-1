console.log('js sourced');

var buttonClicks = 0;
$(document).ready(readyNow);

function readyNow() {
console.log('jq sourced');
$('#generate').on('click', appendToDom);
$('body').on('click', '#swap', swapColors);
$('body').on('click', '#delete', deleteContainer);
}

function appendToDom() {
  buttonClicks++;
  console.log('button', buttonClicks);
  $('body').append('<div class="genDiv"></div>');
  $('.genDiv').append('<p>' + buttonClicks + '</p>');
  $('.genDiv').append('<button id="swap">Swap</button');
  $('.genDiv').append('<button id="delete">Delete</button');
  $('.genDiv').toggleClass('genDiv');
}


function swapColors () {
  $(this).parent().toggleClass('genDiv');
}

function deleteContainer () {
  $(this).parent().remove();
}
