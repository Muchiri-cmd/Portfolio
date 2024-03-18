const navLinks=document.querySelectorAll('.nav-link');
const body=document.querySelector('.main-container');
const sections=document.querySelectorAll('.sections')

navLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        let currentActiveLink=document.querySelector('.active-link');
        currentActiveLink.classList.remove('active-link')
        link.classList.add('active-link');
    });
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-bar');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        header.style.backgroundColor = 'var(--primary-transparent)';
        header.style.width='100vw';
        header.style.left='0em';
       
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.width='80vw';
        header.style.left='7em';
       
    }
});
