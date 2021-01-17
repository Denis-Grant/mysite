const nav = document.querySelector('nav');

// Logo color change on scroll
const navLogo = document.querySelector('.nav .nav__logo');
window.addEventListener('scroll', ()=>{
    window.scrollY >  428 ? navLogo.style.color = '#1f1f1f' :
    navLogo.style.color = 'white';
    
    // console.log(window.scrollY);
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

const portfolio = document.getElementById('portfolio');
const tog = document.querySelector('.toggle');
window.addEventListener('resize', ()=>{
    if (portfolio.clientWidth > 1) {
        // tog.classList.add('white-bg');
        tog.classList.toggle('toggle');
    } else
    if (portfolio.clientWidth >  768) {
        tog.classList.toggle('toggle');
        // tog.classList.remove('white-bg');
    } else
    if (portfolio.clientWidth > 1200) {
        tog.classList.add('white-bg');
        tog.classList.remove('grey-bg');
    }
    console.log(portfolio.clientWidth)
});

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', ()=>{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.6}px`;
});