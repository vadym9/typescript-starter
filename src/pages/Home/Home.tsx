import * as React from "react";
import lazy1 from "../../img/lazy-1.jpg";

const lazyLoadingImages = () => {
  let lazyImages: any[] = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      },
      {
        rootMargin: "0px 0px 256px 0px"
      }
    );

    lazyImages.forEach((lazyImage: any) => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    let active = false;

    const lazyLoad = () => {
      if (active === false) {
        active = true;

        setTimeout(() => {
          lazyImages.forEach(lazyImage => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(image => image !== lazyImage);

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
};

const lazyLoadingHero = () => {
  const lazyBackgrounds: any[] = [].slice.call(
    document.querySelectorAll(".hero-block")
  );

  if ("IntersectionObserver" in window) {
    const lazyBackgroundObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(lazyBackground => {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
};

const Home = () => {
  React.useEffect(() => {
    lazyLoadingImages();
    lazyLoadingHero();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-block" />
      </section>
      <main>
        <section className="widget">
          <div className="container">
            <div className="content">Content</div>
            <div className="two-blocks flex">
              <div className="block">
                <img
                  alt="img"
                  className="lazy"
                  data-src={lazy1}
                  data-srcset={`${lazy1} 1x`}
                />
              </div>
              <div className="block">
                <img
                  alt="img"
                  className="lazy"
                  data-src={lazy1}
                  data-srcset={`${lazy1} 1x`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>footer</div>
      </footer>
    </>
  );
};

export default Home;
