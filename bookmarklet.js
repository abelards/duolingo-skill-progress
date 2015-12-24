javascript:
var l0s = $('.strength-0').length;
var l1s = $('.strength-1').length;
var l2s = $('.strength-2').length;
var l3s = $('.strength-3').length;
var l4s = $('.strength-4').length;
var l5s = $('.strength-5').length;

alert("Progress:\n" +
  (l0s ? (l0s + " x") : '') +
  (l1s ? (l1s + " *\n") : '') +
  (l2s ? (l2s + " **\n") : '') +
  (l3s ? (l3s + " ***\n") : '') +
  (l4s ? (l4s + " ****\n") : '') +
  (l5s ? (l5s + " *****\n") : '')
)
