console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
console.log('jq sourced');
$('#generate').on('click', appendDiv);
}

function appendDiv() {
  console.log('button clicked');
  $('body').append('<div class="genDiv"></div>');
  $('div').html('<p>' +$('div').length + '</p>');
  $('div').append('<button>Swap</button');
  $('div').append('<button>Delete</button');
}
