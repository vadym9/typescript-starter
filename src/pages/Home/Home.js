import React from 'react';
import lazy1 from '../../img/lazy-1.jpg';

const Home = () => (
  <>
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

export default Home;
