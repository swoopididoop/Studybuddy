// sets question number
let number=1;
//When user selects answer 1
function userPressed1(){
    number=number+1;
//changes question based on question number
    document.getElementById('qnumber').textContent='Question '+number ;
if(number==2){
    document.getElementById('question').textContent='What is your weakness in the subject you will study?';
    document.getElementById('qanswer_1').textContent='Application questions';
    document.getElementById('qanswer_2').textContent='Definition and knowledge';}
else 
if(number==3){
    window.location.href= 'Past_papers_page.html';
}
else
if(number==4){
    window.location.href= 'Mindmapping_page.html';
}
}
//when user selects answer 2
function userPressed2(){
    number=number+1;
//changes question based on question number
document.getElementById('qnumber').textContent='Question '+number ;
//Pomodoro
if(number==2){
    window.location.href= 'Pomodoro_page.html';
    }
else 
if(number==3){
    document.getElementById('question').textContent='Are you a visual learner?';
    document.getElementById('qanswer_1').textContent='Yes';
    document.getElementById('qanswer_2').textContent='No';
}
else
if(number==4){
    window.location.href= 'Spaced_repetition_page.html';
}}
