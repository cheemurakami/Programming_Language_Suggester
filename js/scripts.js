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
    
    var rubyResult = 'Ruby!';
    var jsResult = 'JavaScript!';
    var pythonResult = 'Python!';
    var rubyAndjs = 'Ruby and JavaScript!';
    var jsAndPython = 'JavaSctipt and Python!';
    var rubAndPython = 'Ruby and Python!';
    var everything = 'Ruby, JavaScript and Python!';
    var allNo = 'Dude, cmon man.'

    if (rubyCount === 0 && jsCount === 0 && pythonCount === 0){
      console.log(allNo);
    } else if (rubyCount > jsCount && rubyCount > pythonCount){
      console.log(rubyResult);
    } else if (rubyCount > jsCount && rubyCount >= pythonCount){
      console.log(rubAndPython);
    } else if (rubyCount >= jsCount && rubyCount > pythonCount){
      console.log(rubyAndjs);
    } else if (jsCount > rubyCount && jsCount > pythonCount){
      console.log(jsResult);
    } else if (jsCount > rubyCount && jsCount >= pythonCount){
      console.log(jsAndPython);
    } else if (jsCount >= rubyCount && jsCount > pythonCount){
      console.log(rubyAndjs);
    } else if (pythonCount > rubyCount && pythonCount > jsCount){
      console.log(pythonResult);
    } else if (pythonCount > rubyCount && pythonCount >= jsCount){
      console.log(jsAndPython);
    } else if (pythonCount >= rubyCount && pythonCount > jsCount){
      console.log(rubAndPython);
    } else {
      console.log(everything);
    }
  });
});