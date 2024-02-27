const header = document.querySelector('header');
const headerContainer = document.querySelector('.header__container')




function animationHeader(){
   if(window.pageYOffset){
      header.classList.add('header__color');
      headerContainer.classList.add('header__min');


   }else{
      header.classList.remove('header__color');
      headerContainer.classList.remove('header__min');

     

   }
}




window.addEventListener('scroll', animationHeader);
