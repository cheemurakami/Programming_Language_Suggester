$(document).ready(function(){
  // console.log($(".q1 input"))
  var rubyCount = 0;
  var jsCount = 0;
  var pythonCount = 0;

  $(".q1-button").click(function(){
    if($(this).val() === "yes"){
      jsCount ++;
    }
    $('.q2').show();
  });
  $(".q2-button").click(function(){
    if($(this).val() === "yes"){
      jsCount ++;
    }
    $('.q3').show();
  });
  $(".q3-button").click(function(){
    if($(this).val() === "yes"){
      rubyCount ++;
    }
    $('.q4').show();
  });
  $(".q4-button").click(function(){
    if($(this).val() === "yes"){
      pythonCount ++;
    }
    $('.q5').show();
  });
  $(".q5-button").click(function(){
    if($(this).val() === "yes"){
      rubyCount ++;
    }
    $('.q6').show();
  });
  $(".q6-button").click(function(){
    if($(this).val() === "yes"){
      pythonCount ++;
    }
    $('.submit-btn').show();
  });
  
  $("#questions").submit(function(event){
    event.preventDefault();  
    // var rubyCount = 0;
    // var jsCount = 0;
    // var pythonCount = 0;
    var rubyResult = 'Ruby!';
    var jsResult = 'JavaScript!';
    var pythonResult = 'Python!';

    if (rubyCount > jsCount && rubyCount > pythonCount){
      console.log(rubyResult);
    } else if (rubyCount > jsCount && rubyCount >= pythonCount){
      console.log(rubyResult);
      console.log(pythonResult);
    }
  });
});