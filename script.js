
   $(document).ready(function(){
        $(".slider").bxSlider({
            mode: 'fade',
        captions: true,
        slideWidth: 2000,
        responsive:true
        });
      });

  
    console.log("hello")

    const menu_btn= document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    menu_btn.addEventListener('click',()=>{
        

        menu_btn.classList.toggle('active');
        navMenu.classList.toggle('active');

    })

