window.onload = init;

var example = `
<div id="test-id" class="test-class">
  <div id="test-nested-id"></div>
  <div class="test-nested-class"></div>
</div>
<button class="test-repeated-class"></button>
<div class='test-quote'></div>
<div class = "test-space"></div>
<div class=" test-mutli-class multi-class"></div>
`

/* UI */

function init() {
  var convertBtn = document.getElementById('convert-btn');
  var clearBtn = document.getElementById('clear-btn');
  var resetBtn = document.getElementById('reset-btn');
  var timer = document.getElementById('timer')
  var input = document.getElementById('input-area');
  var output = document.getElementById('output-area');

  convertBtn.onclick = convert;
  clearBtn.onclick  = clear;
  resetBtn.onclick  = reset;

  input.value = example

  function convert() {
    output.value = '';

    var start = Date.now();

    var classArr = window.extractClassName(input.value)
    console.log(classArr)
    renderCSSText(output, classArr)

    var last = Date.now() - start;
    timer.innerHTML = last

  }

  function reset() {
    input.value = example;
  }

  function clear() {
    input.value = '';
    output.value = '';
  }
}


function renderCSSText(target, classArr) {
  classArr.forEach(function(name){
    target.value += '.' + name + '{}\n\n';
  })
}