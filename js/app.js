// Logo color change on scroll
const navLogo = document.querySelector('.nav .nav__logo');
window.addEventListener('scroll', ()=>{
    window.scrollY >  116 ? navLogo.style.color = 'black' :
    navLogo.style.color = 'white';
});

// Sidebar menu
const menuLinks = document.querySelectorAll('.nav__menu a');
const mobileIcon = document.querySelector('.nav__mobile-icon');
const navMenuList = document.querySelector('.nav__menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const sidebarUL = document.querySelector('.sidebar-menu ul');



mobileIcon.addEventListener('click',()=> {
    // hide hambuger menu
    mobileIcon.classList.add('hide');
    // scroll in sidemenu
    sidebarMenu.style.right = 0;
    // sidebarMenu.style.display = 'block';
    // sidebarMenu.classList.remove('hide');


    const listItemsCount = navMenuList.childElementCount - 1;
    sidebarUL.innerHTML = '';

    for (let i = 0; i <= listItemsCount; i++){
        sidebarUL.innerHTML += `<li><a href='${menuLinks[i].href}'>${navMenuList.children[i].textContent}</a></li>`

    }


    

});
sidebarMenu.addEventListener('mouseleave',()=>{
    sidebarMenu.style.right = '-160px';
    // sidebarMenu.classList.add('hide');
    // mobileIcon.classList.remove('hide');
    mobileIcon.classList.remove('hide');

});