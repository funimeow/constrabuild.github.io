document.addEventListener('DOMContentLoaded', () => {
    
    const titleElements = document.querySelectorAll('.title-fade-in');
    const titleFadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('active')) {
                entry.target.classList.add('active');
            }
        });
    });
    titleElements.forEach(element => {
        titleFadeInObserver.observe(element);
    });

    
    const sectionElements = document.querySelectorAll('section');
    const sectionFadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('active')) {
                entry.target.classList.add('active');
            }
        });
    });
    sectionElements.forEach(element => {
        sectionFadeInObserver.observe(element);
    });

    
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        currentScroll /= 0.8; 
        if (currentScroll > lastScrollTop) {
            
            document.querySelector(".navbar").classList.add("hidden"); 
        } else {
            
            document.querySelector(".navbar").classList.remove("hidden"); 
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    }, false);
});


