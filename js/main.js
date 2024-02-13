
window.addEventListener('DOMContentLoaded', function() {

    let lineSet = document.querySelectorAll('.animateLine ul li');
    lineSet.forEach(function(line){
        line.classList.add('on')
    })
    

    // GSAP
    let tween = TweenMax.to('.scroll-wrap', 45, {
        x: "-11850px", 
        ease: Linear.easeNone
    });

    // scrollmagic
    let controller = new ScrollMagic.Controller();

    
    let scene = new ScrollMagic.Scene({
        triggerElement: ".empty-contents",
        duration: '1000%', 
        triggerHook: 0,
    })
    .setTween(tween)
    .addTo(controller);

    function updatePercentage() {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;
        let documentHeight = document.documentElement.scrollHeight;
        let progress = scrollPosition / (documentHeight - windowHeight);
        let percent = Math.min(100, Math.max(0, Math.floor(progress * 100)));
        let strongElement = document.querySelector('#percentage');
        if (strongElement) {
            strongElement.innerHTML = percent + '%';
        }
    }
    
    
    window.addEventListener('scroll', updatePercentage);
    
    
    updatePercentage();
    
    
    
    
    
});
