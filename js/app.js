const nav = document.querySelector('nav');

// Logo color change on scroll
const navLogo = document.querySelector('.nav .nav__logo');
window.addEventListener('scroll', ()=>{
    window.scrollY >  428 ? navLogo.style.color = '#1f1f1f' :
    navLogo.style.color = 'white';

    // window.scrollY >  548 ? nav.style.backgroundColor = '#000' :
    // navLogo.style.backgroundColor = '#1f1f1f72';
    
    console.log(window.scrollY);
});

// Sidebar menu
const menuLinks = document.querySelectorAll('.nav__menu a');
const mobileIcon = document.querySelector('.nav__mobile-icon');
const navMenuList = document.querySelector('.nav__menu');
const sidebarMenu = document.querySelector('.sidebar-menu');
const sidebarUL = document.querySelector('.sidebar-menu ul');
const closeSidebar = document.querySelector('.sidebar-menu--close');

sidebarUL.addEventListener('click',(()=>{
    sidebarMenu.style.right = '-160px';
    mobileIcon.classList.remove('hide');

}));

mobileIcon.addEventListener('click',()=> {
    // hide hambuger menu
    mobileIcon.classList.add('hide');
    sidebarMenu.style.right = 0;

    const listItemsCount = navMenuList.childElementCount - 1;
    sidebarUL.innerHTML = '';

    for (let i = 0; i <= listItemsCount; i++){
        sidebarUL.innerHTML += `<li><a href='${menuLinks[i].href}'>${navMenuList.children[i].textContent}</a></li>`

    }
});
sidebarMenu.addEventListener('mouseleave',()=>{
    sidebarMenu.style.right = '-160px';
    mobileIcon.classList.remove('hide');
});

closeSidebar.addEventListener('click', ()=>{
    sidebarMenu.style.right = '-160px';
    mobileIcon.classList.remove('hide');
})


