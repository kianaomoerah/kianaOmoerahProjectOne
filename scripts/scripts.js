// html & css: create a burger button and sticky it to the bottom right 
    // hide our menu by defauly so that it can be summoned by clicking the burger 
    // in the nav, haev a div with our burger button
        // font-awesome icons for burger and X to toggle between
        // media queries to hide it at larger widths

        // when the user clicks, the menu appears 


        const menuButton = document.getElementById('mobileButton');
        const mobileMenu = document.getElementsByClassName('.mobileMenu');

        menuButton.addEventListener('click', function(e){
            // menu slides into view
            console.log(e);
            // toggle the display of mobile menu
            mobileMenu.classList.toggle('menuAppear')
            



            

        })