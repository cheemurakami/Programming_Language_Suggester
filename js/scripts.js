$(document).ready(function(){
  // console.log($(".q1 input"))
  var rubyCount = 0;
  var jsCount = 0;
  var pythonCount = 0;

  $(".q1-button").click(function(){
    if($(this).val() === yes){
      jsCount ++;
    }
    $('.q2').show();
  });
  $(".q2-button").click(function(){
    // console.log($(this).val())
    $('.q3').show();
  });
  $(".q3-button").click(function(){
    // console.log($(this).val())
    $('.q4').show();
  });
  $(".q4-button").click(function(){
    // console.log($(this).val())
    $('.q5').show();
  });
  $(".q5-button").click(function(){
    // console.log($(this).val())
    $('.q6').show();
  });
  $(".q6-button").click(function(){
    // console.log($(this).val())
    $('.q7').show();
  });
  $(".q7-button").click(function(){
    // console.log($(this).val())
    $('.q8').show();
  });
  $(".q8-button").click(function(){
    // console.log($(this).val())
    $('.q9').show();
  });
  $(".q9-button").click(function(){
    // console.log($(this).val())
    $('.q10').show();
  });
  $(".q10-button").click(function(){
    // console.log($(this).val())
    $('.button').show();
  });

  var numOfYes = $(this).val();
  
});