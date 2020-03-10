import React from 'react';
import ReactDOM from 'react-dom';
import {
  MemoryRouter, Route, Switch, Link
} from 'react-router-dom';

// import App from './components/App';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';

import './scss/style.scss';

ReactDOM.render(
  <MemoryRouter>
    <header>
      <div className="container">
        <div className="navbar flex">
          <div className="item">
            <Link to="/" className="link">
              <div className="link-item flex ai-center jc-center">
                Home
              </div>
            </Link>
          </div>
          <div className="item">
            <a href="/posts" className="link">
              <div className="link-item flex ai-center jc-center">
                Posts
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/#" className="link">
              <div className="link-item flex ai-center jc-center">
                Info
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
    <Switch>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
      </main>
    </Switch>
  </MemoryRouter>,
  document.getElementById('app')
);

module.hot.accept();

document.addEventListener('DOMContentLoaded', () => {
  const lazyBackgrounds = [].slice.call(document.querySelectorAll('.hero-block'));

  if ('IntersectionObserver' in window) {
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

  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
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
              lazyImage.classList.remove('lazy');

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
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
  }
});
