# Duolingo Skill Progress
JS bookmark to get an overview of your Duolingo lessons' progress

## HOWTO
* create a new bookmark in your browser
* copy-paste this code in the `address` part
* click on the bookmark when visiting the Duolingo home for your target language

## CODE
```
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
```

## DISCLAIMER
Yes, this code is not made to be smart. It's a 1mn script.

## TODOs
Perhaps something to name / highlight / go to the weakest lesson(s)?

Cheers!
