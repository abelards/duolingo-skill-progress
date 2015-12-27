javascript:
var l0s = $('.strength-0').length;
var l1s = $('.strength-1').length;
var l2s = $('.strength-2').length;
var l3s = $('.strength-3').length;
var l4s = $('.strength-4').length;
var l5s = $('.strength-5').length;

var m0 = l0s > 3 ? '' : $('.strength-0').parent().parent().children('.skill-badge-name').text();
var m1 = l1s > 3 ? '' : $('.strength-1').parent().parent().children('.skill-badge-name').text();
var m2 = l2s > 3 ? '' : $('.strength-2').parent().parent().children('.skill-badge-name').text();
var m3 = l3s > 3 ? '' : $('.strength-3').parent().parent().children('.skill-badge-name').text();
var m4 = l4s > 3 ? '' : $('.strength-4').parent().parent().children('.skill-badge-name').text();
var m5 = l5s > 3 ? '' : $('.strength-5').parent().parent().children('.skill-badge-name').text();

alert("Progress:\n" +
  (l0s ? (l0s + " x " + m0 + "\n") : '') +
  (l1s ? (l1s + " * " + m1 + "\n") : '') +
  (l2s ? (l2s + " ** " + m2 + "\n") : '') +
  (l3s ? (l3s + " *** " + m3 + "\n") : '') +
  (l4s ? (l4s + " **** " + m4 + "\n") : '') +
  (l5s ? (l5s + " ***** " + m5 + "\n") : '')
)
