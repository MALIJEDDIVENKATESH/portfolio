var bgswitch=document.getElementsByClassName('bgswitch');
console.log(bgswitch)


function change()
{
    var body=document.body;

    if(!body.classList.contains('dmode')){

        body.classList.add('dmode')
    }
    else{
        body.classList.remove('dmode');
    }

}

function popup(){
    alert("Thanks for your response ");
  }