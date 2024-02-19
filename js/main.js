
window.addEventListener('DOMContentLoaded', function() {


  let scrInfo = document.querySelector('.scrollInfo.on');
  
  if (!scrInfo) {
    let scrollInfoElement = document.querySelector('.scrollInfo');
    if (scrollInfoElement) {
      scrollInfoElement.classList.add('on');
    }
  } else {
    scrInfo.classList.remove('on');
  }

  let lineSet = document.querySelectorAll('.animateLine ul li');
  lineSet.forEach(function(line) {
    line.classList.add('on');
  });

  let bgContents = document.querySelectorAll('#app li');
  let durationInterval = 0.2; 
  bgContents.forEach(function(background, index) {
    background.classList.add('active');
    if (index === 0) {
      background.style.animationDuration = '0.7s'; 
    } else {
      background.style.animationDuration = (0.9 + (index - 1) * durationInterval) + 's';
    }
  });
  
  const liElements = document.querySelectorAll('#app > li');
  liElements.forEach(function(element, index) {
    element.addEventListener('click', function() {
      let load = document.querySelector('.loading');
      load.classList.add('on');
      let clickCircle = document.getElementById('circle');
      clickCircle.classList.add('on');
      setTimeout(function() {
        const href = ['belif.html', 'http://www.naver.com'];
        window.location.href = href[index];
      }, 1500);
    });
  });

  let tween1 = TweenMax.to('.scroll-wrap', 45, {
    x: "-11850px",
    ease: Linear.easeNone
  });
 let tween2 = TweenMax.to('.smooth-section',4,{
  y:'-8600px',
  ease:Power1.easeInOut
 });

  let controller = new ScrollMagic.Controller();

  let scene1 = new ScrollMagic.Scene({
    triggerElement: ".empty-contents",
    duration: '1000%',
    triggerHook: 0,
  })

  .setTween(tween1)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  triggerElement:'.fixed',
  duration:8600,
  triggerHook:0,
  offset:100
})
.setTween(tween2)
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




    /*

    --------
    --------
    Belif.html
    --------
    --------

    */
   let circle_cancle = document.querySelector('.circle-bg.active');
   if(!circle_cancle){
    let circleElement = document.querySelector('.circle-bg');
    if(circleElement){
    document.querySelector('.circle-bg').classList.add('active');
  };
   }else{
    circle_cancle.classList.remove('active');
   }
  });
  
  function index2percent() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;
    let progress = scrollPosition / (documentHeight - windowHeight);
    let percent = Math.min(100, Math.max(0, Math.floor(progress * 100)));
    let strongElement = document.querySelector('.fixed-item > .scrPercent > span');
    if (strongElement) {
      strongElement.innerHTML = percent + '%';
    }
  }

  window.addEventListener('scroll', index2percent);

  index2percent();


  window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    let domTopHeight = document.getElementById('main').offsetTop;
    if(scrollY > domTopHeight + 1000 && scrollY <=  domTopHeight + 1800){
     document.querySelectorAll('.B.picture-section > p').classList.add('on');
    }
  });