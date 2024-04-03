//Quiz CSS 

//Create quiz subimition funtion
function SubQuiz() {
    var Score = 0
    clearInterval(time);
    document.getElementById("ShowAnswer").style.display="block"
    window.location = '#ShowAnswer';
    document.getElementById("Contner1").style.display = "none"
    document.getElementById("Show").addEventListener("click",function(){
    document.getElementById("Contner1").style.display = "block";
    document.getElementById("SubButton").style.display = "none";
    });
    function getRadioValue (QnName) {
      var Radios_no = document.getElementsByName(QnName);
      for (var i = 0, length = Radios_no.length; i < length; i++) {
        if (Radios_no[i].checked) {
       
          // Answer is saved with value
          var Answer_value = Number(Radios_no[i].value);
        }
        Radios_no[i].disabled = true;
      }
      //Not selected value "0" is given to it
      if (isNaN(Answer_value)) {
      Answer_value = 0;
    }
    return Answer_value;
    }
    // Use the getRadioValue funtion to determine a score.
    QnName=["Qn1","Qn2","Qn3","Qn4","Qn5","Qn6","Qn7","Qn8","Qn9","Qn10"]
    var Cal_score
    //Returns the answer value
    for(var i=0; i<10; i++){
      Cal_score=getRadioValue(QnName[i])
      console.log(Cal_score)
      Score=Cal_score+Score
      
    }
  
  
   //Print output for wrong answers
    function Correct_answer_ (Correct_str_no, Qn_number) {
      return ("The correct answer for question number." + Qn_number + ": &nbsp;<strong>" +
      (document.getElementById(Correct_str_no).textContent) + "</strong>");
    }
   //Print output for correct answers
    function correct(number){
      return("Your answer for question number."+number+" is correct ")
    }
    //Change colour according to your answers
    if (getRadioValue('Qn1') === 0) {
      document.getElementById('Correct_answer_1').innerHTML = Correct_answer_('CorrectStr1', 1);
      document.getElementById('Correct_answer_1').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_1').innerHTML = correct(1);
      document.getElementById('Correct_answer_1').style.backgroundColor="#4be043"
    }
    if (getRadioValue('Qn2') === 0) {
      document.getElementById('Correct_answer_2').innerHTML = Correct_answer_('CorrectStr2', 2);
      document.getElementById('Correct_answer_2').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_2').innerHTML = correct(2);
      document.getElementById('Correct_answer_2').style.backgroundColor="#4be043"
    }
    if (getRadioValue('Qn3') === 0) {
      document.getElementById('Correct_answer_3').innerHTML = Correct_answer_('CorrectStr3', 3);
      document.getElementById('Correct_answer_3').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_3').innerHTML = correct(3);
      document.getElementById('Correct_answer_3').style.backgroundColor="#4be043"
    }
    if (getRadioValue('Qn4') === 0) {
      document.getElementById('Correct_answer_4').innerHTML = Correct_answer_('CorrectStr4', 4);
      document.getElementById('Correct_answer_4').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_4').innerHTML = correct(4);
      document.getElementById('Correct_answer_4').style.backgroundColor="#4be043"
    }
    if(getRadioValue('Qn5') === 0){
      document.getElementById('Correct_answer_5').innerHTML = Correct_answer_('CorrectStr5', 5);
      document.getElementById('Correct_answer_5').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_5').innerHTML = correct(5);
      document.getElementById('Correct_answer_5').style.backgroundColor="#4be043"
    }
    if(getRadioValue('Qn6') === 0){
      document.getElementById('Correct_answer_6').innerHTML = Correct_answer_('CorrectStr6', 6);
      document.getElementById('Correct_answer_6').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_6').innerHTML = correct(6);
      document.getElementById('Correct_answer_6').style.backgroundColor="#4be043"
    }
    if(getRadioValue('Qn7') === 0){
      document.getElementById('Correct_answer_7').innerHTML = Correct_answer_('CorrectStr7', 7);
      document.getElementById('Correct_answer_7').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_7').innerHTML = correct(7);
      document.getElementById('Correct_answer_7').style.backgroundColor="#4be043"
    }
    if(getRadioValue('Qn8') === 0){
      document.getElementById('Correct_answer_8').innerHTML = Correct_answer_('CorrectStr8', 8);
      document.getElementById('Correct_answer_8').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_8').innerHTML = correct(8);
      document.getElementById('Correct_answer_8').style.backgroundColor="#4be043"
    }
    if(getRadioValue('Qn9') === 0){
      document.getElementById('Correct_answer_9').innerHTML = Correct_answer_('CorrectStr9', 9);
      document.getElementById('Correct_answer_9').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_9').innerHTML = correct(9);
      document.getElementById('Correct_answer_9').style.backgroundColor="#4be043"
    }
    if(getRadioValue('Qn10') === 0){
      document.getElementById('Correct_answer_10').innerHTML = Correct_answer_('CorrectStr10', 10);
      document.getElementById('Correct_answer_10').style.backgroundColor="#bd1526"
    }else{
      document.getElementById('Correct_answer_10').innerHTML = correct(10);
      document.getElementById('Correct_answer_10').style.backgroundColor="#4be043"
    }
  
    var Max_marks = 100;
  
    // Show the marks
    if (Score < 0){
      Score =0;
    }
    var Show_score = name+  "Your Marks: " + Score +"/" + Max_marks;
  
    // Display marks and the status of those marks
    if (Score === Max_marks) {
      Show_score = Show_score + "&nbsp; <strong> Perfect  </strong>";}
    
    else if (Score >= 60 && Score < 100) {
      Show_score = Show_score + "&nbsp; <strong> Good Marks </strong>";}
  
    else if (Score >= 40 && Score < 60) {
      Show_score = Show_score + "&nbsp; <strong> Average Marks</strong>";} 
    
    else if  (Score < 40) {
      Show_score = Show_score + "&nbsp; <strong> Low Marks </strong>";} 
    
   //Change background colour    
    document.getElementById('User_Score').innerHTML = Show_score;
    if(Score>30){
      document.getElementById("ShowAnswer").style.backgroundColor="	#99FF99"
    }else{
      document.getElementById("ShowAnswer").style.backgroundColor="#FF5B5B"
    }
  }
  // Create timer for quiz 
  var time= setInterval(My_timer, 1000);
  var sec = 120; //time in seconds
  function My_timer() {
  
      //Timer setting up
      document.getElementById('Timer').innerHTML = sec+" s";
      sec--;   
      console.log(sec)
      if (sec <0) {
          clearInterval(time); //After submit freeze the time 
          document.getElementById("SubButton").disabled = true; 
          SubQuiz();
      }
  }
  