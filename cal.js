// screen name ka id hai html me usko idhar fetch ker rahe hai
var screen=document.getElementById('screen');
// thoda padhna hoga query selector ka
buttons = document.querySelectorAll('button');
//yaha loop chala rhe h sala item ko ek ek ker ke show karega

var screenvalue="";
for(item of buttons)
{
    //event listener lagya hai yaha pe ,e object man lo
    //e ka use under karenge ab
    item.addEventListener('click',(e)=>
    {
        //jis button pe click karenge uske text ko leke 
        //aega ye inertext
        buttontext=e.target.innerText;
        console.log('aa gya main jo daale ho tum',buttontext);
        //if we click on multiplication 
        if(buttontext=='X')
        {
            //buttontext multilply wala sign
            buttontext='*';
            // screen.value screen ka value hai
            //screen pe hme wo show karega sign wo hum daalenge
            screenvalue+=buttontext
            screen.value =screenvalue;

        }
      
        else if(buttontext=='C')
        {
            // if we click on c it will clear our calculator screen
            screenvalue="";
            screen.value =screenvalue;
        }
        else if(buttontext=='=')
        {
            // it will calculate all the element which is present on screen
          screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=buttontext
            screen.value =screenvalue;
        }
    })
}