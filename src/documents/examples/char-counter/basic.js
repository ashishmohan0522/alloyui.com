AUI().ready('aui-char-counter', function(A) {

  var charCounter = new A.CharCounter({
    input: '#input',
    counter: '#counter',
    maxLength: 10,
    on: {
      maxLength: function(event) {
        alert('The max length limit was reached');
      }
    }
  });

});