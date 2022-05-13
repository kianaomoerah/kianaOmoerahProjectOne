    const menuButton = document.getElementById('mobileButton');

    const mobileMenu = document.querySelector('.mobileMenu');


    menuButton.addEventListener('click', function(e){

        mobileMenu.classList.toggle('revealMenu');

    });