console.log('js sourced');

$(document).ready(readyNow);

function readyNow() {
console.log('jq sourced');
$('#generate').on('click', appendDiv);
}

function appendDiv() {
  console.log('button clicked');
  $('body').append('<div>hi</div>');

}
