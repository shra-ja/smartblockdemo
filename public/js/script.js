$(document).ready(function () {
  var socket = io.connect('http://localhost');
  drawKeypad('keypad');
});

function drawKeypad(svg) {
  var svg = document.getElementById(svg);
  var svgns = 'http://www.w3.org/2000/svg'

  var k = 1;
  for (var i=1; i<=3; i++) {
    for (var j=1; j<=3; j++) {
      var y = svg.getAttribute('width') * 1/4 * i;
      var x = svg.getAttribute('height') * 1/4 * j;

      var circle = document.createElementNS(svgns, 'circle');
      circle.setAttribute('id', 'key' + k);
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', '20');
      circle.setAttribute('fill', 'orange');
      
      var text = document.createElementNS(svgns, 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y);
      text.setAttribute('fill', 'white');
      text.setAttribute('style', 'text-anchor: middle; alignment-baseline: middle');
      text.setAttribute('font-family', "'Arial'");
      text.setAttribute('font-size', '16');
      text.setAttribute('font-weight', 'bold');
      text.textContent = k;

      svg.appendChild(circle);
      svg.appendChild(text);

      k++;
    }
  }
}