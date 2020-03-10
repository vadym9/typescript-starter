/* eslint-disable no-param-reassign */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/style.scss';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();

// const newImage = new Image();
// newImage.src = lazy1;
// const hero = document.getElementsByClassName('hero')[0];
// console.log(hero);

// if ('decode' in newImage) {
//   newImage.decode().then(() => {
//     console.log("decode");
//     hero.appendChild(newImage)
//     // hero.style.backgroundImage = `url(${newImage})`;
//     // hero.style.backgroundRepeat = 'no-repeat';
//     // hero.setAttribute('background-image', newImage);
//     // hero.styles
//   });
// } else {
//   console.log("else");

//   hero.appendChild(newImage)
// }

document.addEventListener('DOMContentLoaded', () => {
  const lazyBackgrounds = [].slice.call(document.querySelectorAll('.hero-block'));

  if ("IntersectionObserver" in window) {
    const lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach((lazyBackground) => {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    }, {
      rootMargin: '0px 0px 256px 0px'
    });

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    let active = false;

    const lazyLoad = () => {
      if (active === false) {
        active = true;

        setTimeout(() => {
          lazyImages.forEach((lazyImage) => {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== 'none') {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter((image) => image !== lazyImage);

              if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    }

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
  }
});
