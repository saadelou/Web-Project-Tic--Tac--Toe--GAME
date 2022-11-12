
let title = document.querySelector('.result');
let turn ='X';
let matrix= [];
let counter=0;

function no_one(){
    title.innerHTML='Tie !!';
    end();
}

function end(){
    setInterval(function(){title.innerHTML+='.'},1000);
    setInterval(function(){location.reload() },4000);
}

function show (n1,n2,n3){
    title.innerHTML=matrix[n1]+' Winner !!';
    document.getElementById('case' + n1).style.background='#000';
    document.getElementById('case' + n2).style.background='#000';
    document.getElementById('case' + n3).style.background='#000';  
    end();
}

function winner (){
    for(let i =0 ;i<9;i++){
        matrix [i]=document.getElementById('case'+i).innerHTML;
    }
    
    if( (matrix[0]==matrix[1] && matrix[1]==matrix[2] && matrix[0]!='') ){
        show(0,1,2);
    }
    else if((matrix[3]==matrix[4] && matrix[4]==matrix[5] && matrix[3]!='')){
        show(3,4,5);
    }
    else if((matrix[6]==matrix[7] && matrix[7]==matrix[8] && matrix[6]!='')){
        show(6,7,8);
    }
    else if((matrix[0]==matrix[3] && matrix[3]==matrix[6] && matrix[0]!='')){
        show(0,3,6);
    }
    else if ((matrix[1]==matrix[4] && matrix[4]==matrix[7] && matrix[1]!='')){
        show(1,4,7);
    }
    else if((matrix[2]==matrix[5] && matrix[5]==matrix[8] && matrix[2]!='')){
        show(2,5,8);
    }
    else if ((matrix[0]==matrix[4] && matrix[4]==matrix[8] && matrix[0]!='')){
        show(0,4,8);
    }
    else if((matrix[2]==matrix[4] && matrix[6]==matrix[4] && matrix[6]!='')){
        show(2,4,6);
    }
}



function game(id){
    let square = document.getElementById(id);
    if(square.innerHTML==='' && turn=='X'){
        square.innerHTML='X';
        turn='O';
        title.innerHTML=" O ";
        counter++;
    }
    else if(square.innerHTML==='' && turn=='O'){
        square.innerHTML='O';
        turn='X';
        title.innerHTML=" X ";
        counter++;
    }
    if(counter==9){
        no_one();
    }else{
       winner(); 
    }
    
}