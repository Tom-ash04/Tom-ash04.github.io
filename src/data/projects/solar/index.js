(function (){
  const inputs = document.querySelectorAll('.controls input');
  const img = document.querySelectorAll('body div img');
  const forward = document.querySelector('.fa-angle-double-right');
  const backward = document.querySelector('.fa-angle-double-left');
  let targetImage = null,
    widths = {
      width1: 10,
      width2: 25,
      width3: 26,
      width4: 14,
      width5: 293,
      width6: 247,
      width7: 105,
      width8: 102,     
    }
    counters = {
      counter: 0
    }

  img.forEach(img => img.addEventListener('mouseenter', function(){
    this.classList.add("scalable");
    targetImage = document.querySelector(".scalable");
    })
  )
  img.forEach(img => img.addEventListener('mouseleave', function(){
    this.classList.remove("scalable");
    document.documentElement.style.setProperty(`--spacing${this.alt}`, this.dataset.size + "px");
    widths["width" + this.alt] = +this.dataset.size;
    targetImage = null;
    })
  )

  document.addEventListener('wheel', Scaling);
  forward.addEventListener('click', () => goToNext(counters.counter));
  backward.addEventListener('click', () => goToPrevious(counters.counter));

  function goToNext(counter){
    switch(counter){
      case 0:
        $(window).scrollTo({top: '0px', left: 1080 - (window.innerWidth / 2)}, 3000);
        counters.counter += 1;
      break;
      case 1:
        $(window).scrollTo({top: '0px', left: 1500 - (window.innerWidth / 2)}, 3000);
        counters.counter += 1;
      break;
      case 2:
        $(window).scrollTo({top: '0px', left: 2280 - (window.innerWidth / 2)}, 3000);
        counters.counter += 1;
      break;
      case 3:
        $(window).scrollTo({top: '0px', left: 7780 - (window.innerWidth / 2)}, 5000);
        counters.counter += 1;
      break;
      case 4:
        $(window).scrollTo({top: '0px', left: 14270 - (window.innerWidth / 2)}, 5000);
        counters.counter += 1;
      break;
      case 5:
        $(window).scrollTo({top: '0px', left: 28700 - (window.innerWidth / 2)}, 5000);
        counters.counter += 1;
      break;
      case 6:
        $(window).scrollTo({top: '0px', left: 44970 - (window.innerWidth / 2)}, 5000);
        counters.counter += 1;
        fadeAndHide(forward);
      break;
      default:
        null;
    }
    fadeAndShow(backward);
  }

  function goToPrevious(counter){
    switch(counter){
      case 1:
        $(window).scrollTo({top: '0px', left: 0 - (window.innerWidth / 2)}, 3000);
        counters.counter -= 1;
        fadeAndHide(backward);
      break;
      case 2:
        $(window).scrollTo({top: '0px', left: 1080 - (window.innerWidth / 2)}, 3000);
        counters.counter -= 1;
      break;
      case 3:
        $(window).scrollTo({top: '0px', left: 1500 - (window.innerWidth / 2)}, 3000);
        counters.counter -= 1;
      break;
      case 4:
        $(window).scrollTo({top: '0px', left: 2280 - (window.innerWidth / 2)}, 5000);
        counters.counter -= 1;
      break;
      case 5:
        $(window).scrollTo({top: '0px', left: 7780 - (window.innerWidth / 2)}, 5000);
        counters.counter -= 1;
      break;
      case 6:
        $(window).scrollTo({top: '0px', left: 14270 - (window.innerWidth / 2)}, 5000);
        counters.counter -= 1;
      break;
      case 7:
        $(window).scrollTo({top: '0px', left: 28700 - (window.innerWidth / 2)}, 5000);
        counters.counter -= 1;
      break;
      default:
        null;
    }
    fadeAndShow(forward);
  }

  function fadeAndHide(target){
    target.style.opacity = 0;
    setTimeout(() => target.style.visibility = 'hidden' ,1000)
  }

  function fadeAndShow(target){
    target.style.visibility = 'visible';
    setTimeout(() => target.style.opacity = 1, 1000)
  }

  function Scaling(e){
    if(targetImage != null){
      if(e.deltaY === 100){
      widths["width" + targetImage.alt] < targetImage.dataset.max ? (widths["width" + targetImage.alt]) += 10 : null;
      document.documentElement.style.setProperty(`--spacing${targetImage.alt}`, widths["width" + targetImage.alt] + "px");
      }else{
      widths["width" + targetImage.alt] > targetImage.dataset.size ? (widths["width" + targetImage.alt]) -= 10 : null;
      document.documentElement.style.setProperty(`--spacing${targetImage.alt}`, widths["width" + targetImage.alt] + "px");
      }
    }
  }
})();
