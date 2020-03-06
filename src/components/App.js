import React from 'react';

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
    <main>
      <section className="widget">
        <div className="container">
          <div className="two-blocks flex">
            <div className="block">
              One column
            </div>
            <div className="block">
              Second column
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
