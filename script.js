$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('#answer1').val();
    const answer2 = $('#answer2').val();

    
    if (answer1 === 'bitter' && answer2 >= 2) {
      showResult("Decaf");
    } else if (answer1 === 'sweet' && answer2 >= 3) {
      showResult("Latte");
    } else if (answer1 === 'sweet' && answer2 >= 1) {
      showResult("Cappucino");
    } else if (answer1 === 'no coffee' && answer2 >= 0) {
      showResult("Black Coffee");
    }
      
    quizCount++;
    updateQuizCount();
  });

  function showResult(character) {
    const resultText = `Your character result is: ${character}.`;
    $('#result').empty().append(resultText);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});