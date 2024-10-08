let light=document.querySelector('.light');
let img=document.querySelector('.dark-mode-img');
light.addEventListener("click", 
  function() {
    document.querySelector('.about').classList.toggle('dark-mode-about');
    document.querySelector('.nav').classList.toggle('dark-mode-nav');
    document.querySelector('.skills').classList.toggle('dark-mode-skills');
    document.querySelector('.contact-me').classList.toggle('dark-mode-contact-me');
    document.querySelector('.footer').classList.toggle('dark-mode-footer');
    document.querySelector('.skill-details').classList.toggle('skill-details-dark');
    document.querySelector('.hide-skill-details').classList.toggle('hide-skill-details-dark');
   
    let front=document.querySelectorAll('.skill-card-front');
    let back=document.querySelectorAll('.skill-card-back');

    for(let i=0;i<front.length;i++){
      front[i].classList.toggle('skill-card-front-dark');
      back[i].classList.toggle('skill-card-back-dark');
    }
    if(img.src.includes('mode-light')){
      img.src="Images/moon-dark-theme.svg";
    } else{
      img.src="Images/mode-light.svg";
    }
  }
)



let submit=document.querySelector('.submit-btn')
submit.addEventListener("click", 
  function() {
    let Name=document.querySelector('.name').value;
    let msg=document.querySelector('.msg').value;
    if(Name=='' || msg==''){
      document.querySelector('.js-error').innerHTML='You Have to fill both name and msg forms';
    }else{
      msg=`Hi my name is ${Name}. ${msg} `; 
      window.open(`mailto:vinayak2002590@gmail.com?subject=subject&body=${msg}`);

    }
  }
)

let skill=document.querySelectorAll('.skill-card')

for(let i=0;i<(skill.length);i++){
  skill[i].addEventListener("click", 
    function() {
      skill[i].classList.toggle('skill-card-flip')
    }
  )
}


let details=document.querySelector('.skill-details')

details.addEventListener("click",
  function() {
    for(let i=0;i<(skill.length);i++){
      skill[i].classList.add('skill-card-flip')
    }
    
  }
)

let hideDetails=document.querySelector('.hide-skill-details')
hideDetails.addEventListener("click",
  function() {
    for(let i=0;i<(skill.length);i++){
      skill[i].classList.remove('skill-card-flip')
    }
    
  }
)



const div=document.querySelector('.text');
const text="Hello! Welcome to My Website!"

function textTypingEffect(element,text,i=0){
  element.textContent+=text[i];
  
  if(i===text.length-1){
    return;
  }
  setTimeout(()=> textTypingEffect(element,text,i+1),50)
}
textTypingEffect(div,text);
