$(document).ready(function(){
  // console.log($(".q1 input"))
  var rubyCount = 0;
  var jsCount = 0;
  var pythonCount = 0;

  $(".q1-button").click(function(){
    var label = $(this).parent()
    if($(this).val() === "yes"){
      jsCount ++;
      label.addClass('btn-success');
      label.removeClass('btn-secondary');
    } else {
      label.addClass('btn-danger');
      label.removeClass('btn-secondary');
    }
    $('.q1-button').attr("disabled",true); 
    $('.q2').show();
  });

  $(".q2-button").click(function(){
    var label = $(this).parent()
    if($(this).val() === "yes"){
      jsCount ++;
      label.addClass('btn-success');
      label.removeClass('btn-secondary');
    } else {
      label.addClass('btn-danger');
      label.removeClass('btn-secondary');
    }
    $('.q2-button').attr("disabled",true); 
    $('.q3').show();
  });
  $(".q3-button").click(function(){
    var label = $(this).parent()
    if($(this).val() === "yes"){
      jsCount ++;
      label.addClass('btn-success');
      label.removeClass('btn-secondary');
    } else {
      label.addClass('btn-danger');
      label.removeClass('btn-secondary');
    }
    $('.q3-button').attr("disabled",true); 
    $('.q4').show();
  });
  $(".q4-button").click(function(){
    var label = $(this).parent()
    if($(this).val() === "yes"){
      jsCount ++;
      label.addClass('btn-success');
      label.removeClass('btn-secondary');
    } else {
      label.addClass('btn-danger');
      label.removeClass('btn-secondary');
    }
    $('.q4-button').attr("disabled",true); 
    $('.q5').show();
  });
  $(".q5-button").click(function(){
    var label = $(this).parent()
    if($(this).val() === "yes"){
      jsCount ++;
      label.addClass('btn-success');
      label.removeClass('btn-secondary');
    } else {
      label.addClass('btn-danger');
      label.removeClass('btn-secondary');
    }
    $('.q5-button').attr("disabled",true); 
    $('.q6').show();
  });
  $(".q6-button").click(function(){
    var label = $(this).parent()
    if($(this).val() === "yes"){
      jsCount ++;
      label.addClass('btn-success');
      label.removeClass('btn-secondary');
    } else {
      label.addClass('btn-danger');
      label.removeClass('btn-secondary');
    }
    $('.q6-button').attr("disabled",true); 
    $('.submit-btn').show();
  });
  
  $("#form-group").submit(function(event){
    event.preventDefault();  
    
    var rubyResult = 'Ruby!';
    var jsResult = 'JavaScript!';
    var pythonResult = 'Python!';
    var rubyAndjs = 'Ruby and JavaScript!';
    var jsAndPython = 'JavaSctipt and Python!';
    var rubAndPython = 'Ruby and Python!';
    var everything = 'Ruby, JavaScript and Python!';
    var allNo = 'Dude, please stop testing me.'

    if (rubyCount === 0 && jsCount === 0 && pythonCount === 0){
      $('.result').show();
      $('div.message').text(allNo);
    } else if (rubyCount > jsCount && rubyCount > pythonCount){
      $('.result').show();
      $('#message').text(rubyResult);
    } else if (rubyCount > jsCount && rubyCount >= pythonCount){
      $('.result').show();
      $('#message').text(rubAndPython);
    } else if (rubyCount >= jsCount && rubyCount > pythonCount){
      $('.result').show();
      $('#message').text(rubyAndjs);
    } else if (jsCount > rubyCount && jsCount > pythonCount){
      $('.result').show();
      $('#message').text(jsResult);
    } else if (jsCount > rubyCount && jsCount >= pythonCount){
      $('.result').show();
      $('#message').text(jsAndPython);
    } else if (jsCount >= rubyCount && jsCount > pythonCount){
      $('.result').show();
      $('#message').text(rubyAndjs);
    } else if (pythonCount > rubyCount && pythonCount > jsCount){
      $('.result').show();
      $('#message').text(pythonResult);
    } else if (pythonCount > rubyCount && pythonCount >= jsCount){
      $('.result').show();
      $('#message').text(jsAndPython);
    } else if (pythonCount >= rubyCount && pythonCount > jsCount){
      $('.result').show();
      $('#message').text(rubAndPython);
    } else {
      $('.result').show();
      $('#message').text(everything);
    }
  });
 
});