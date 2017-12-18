console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
console.log('jq sourced');
$('#generate').on('click', appendToDom);
$('body').on('click', '#swap', swapColors);
$('body').on('click', '#delete', deleteContainer);
}

function appendToDom() {
  console.log('button clicked');
  $('body').append('<div class="genDiv"></div>');
  $('div').html('<p>' +$('div').length + '</p>');
  $('div').append('<button id="swap">Swap</button');
  $('div').append('<button id="delete">Delete</button');
}

function swapColors () {
  $(this).parent().toggleClass('genDiv');
}

function deleteContainer () {
  $(this).parent().remove();
}
