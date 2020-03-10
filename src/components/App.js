import React from 'react';
import lazy1 from '../img/lazy-1.jpg';

const App = () => (
  <>
    <header>
      <div className="container">
        <div className="navbar flex">
          <div className="item">
            <a href="/#" className="link">
              <div className="link-item flex ai-center jc-center">
                Home
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/#" className="link">
              <div className="link-item flex ai-center jc-center">
                Store
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
    <section className="hero">
      <div className="hero-block">
        <>
        </>
      </div>
    </section>
    <main>
      <section className="widget">
        <div className="container">
          <div className="content">
            Content
          </div>
          <div className="two-blocks flex">
            <div className="block">
              <img alt="img" className="lazy" data-src={lazy1} data-srcset={`${lazy1} 1x`} />
            </div>
            <div className="block">
              Second column
              <img alt="img" className="lazy" data-src={lazy1} data-srcset={`${lazy1} 1x`} />
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div>
        footer
      </div>
    </footer>
  </>
);

export default App;
