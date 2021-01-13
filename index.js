var bgswitch=document.getElementsByClassName('bgswitch');


function change()
{
    var body=document.body;

    if(!body.classList.contains('dmode')){

        body.classList.add('dmode')
        body.backgroundColor= '#2d3436';
         body.style.backgroundImage= 'linear-gradient(315deg, #2d3436 0%, #000000 74%)';
         
        }
        else{
            body.classList.remove('dmode');
            body.style.backgroundImage= '';

        


    }


    var section =document.getElementsByClassName('section');
    Array.from(section).forEach((value,index)=>{
        let color=value.style.backgroundColor;

      

     if(!value.classList.contains('dmode')){

         value.classList.add('dmode')
     }
     else{
         value.classList.remove('dmode');
     }

     
    })
    
    var heading=document.getElementsByClassName('heading');
    
    Array.from(heading).forEach((value,index)=>{

    
    if(!value.classList.contains('dmode')){

        value.classList.add('dmode')
    }
    else{
        value.classList.remove('dmode');
    }


    })
    
    
  

    
}

function popup(){
    alert("Thanks for your response ");

  }