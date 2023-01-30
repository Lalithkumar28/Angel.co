// toggle
const togglebutton=document.getElementsByClassName("btn")[0]
togglebutton.addEventListener('click',()=>{
   const login=document.getElementsByClassName("header")[0];
    login.classList.toggle('active')
}
);

// count num

const counterup = document.querySelector(".counter");
const observer = new IntersectionObserver((entries, observer)=>{
   const entry = entries[0];
   // console.log(entry);
   if(entry.isIntersecting){
      Countfunction();
      observer.unobserve(counterup);
   }
   else return;
},
)

observer.observe(counterup);


const speed = 20;
const Countfunction = () =>{
         const target = 6000000;
         const countString = counterup.innerText.replace(/\D/g,'');
         const countInt = parseInt(countString);
   
         const inc = target/speed;
      
         if(countInt < target){
   
            counterup.innerText = (countInt+inc).toLocaleString();
            setTimeout(Countfunction, 50);
   
         } else{
            countString.innerText=target;
         }

      }