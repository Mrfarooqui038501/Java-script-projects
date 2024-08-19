const buttons = document.querySelectorAll('.button');
const body  = document.querySelector('body')

buttons.forEach(function(button){
    console.log(buttons)
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id==='Green'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='Black'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='Red'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='Blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='Purple'){
            body.style.backgroundColor = event.target.id;
        }
    });
});
