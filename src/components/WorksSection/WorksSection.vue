<script setup lang="ts">
import MasonryBrick from "./MasonryBrick.vue";
import { onMounted } from "vue";
onMounted(() => {
  import("~/assets/js/photoswipe.js");
});
</script>

<template>
  <!-- works
    ================================================== -->
  <section id="works" class="s-works target-section">
    <div class="row narrow section-intro has-bottom-sep">
      <div class="col-full">
        <h3>Moje prace</h3>
        <h1>Galeria ślubna</h1>
      </div>
    </div>

    <div class="row masonry-wrap">
      <div class="masonry">
        <MasonryBrick
          title="The Beetle car"
          width="1000"
          height="700"
          src1x="images/portfolio/gallery/g-beetle.jpg"
          src2x="images/portfolio/beetle@2x.jpg"
        />
        <!-- <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-beetle.jpg"
                class="thumb-link"
                title="The Beetle Car"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/beetle.jpg"
                  srcset="
                    images/portfolio/beetle.jpg    1x,
                    images/portfolio/beetle@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">The Beetle</h3>
              <p class="item-folio__cat">Web Development</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-lighthouse.jpg"
                class="thumb-link"
                title="Lighthouse"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/lighthouse.jpg"
                  srcset="
                    images/portfolio/lighthouse.jpg    1x,
                    images/portfolio/lighthouse@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Lighthouse</h3>
              <p class="item-folio__cat">Web Design</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-salad.jpg"
                class="thumb-link"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/salad.jpg"
                  srcset="
                    images/portfolio/salad.jpg    1x,
                    images/portfolio/salad@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Salad</h3>
              <p class="item-folio__cat">Branding</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <span class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </span>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-woodcraft.jpg"
                class="thumb-link"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/woodcraft.jpg"
                  srcset="
                    images/portfolio/woodcraft.jpg    1x,
                    images/portfolio/woodcraft@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Woodcraft</h3>
              <p class="item-folio__cat">Branding</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <span class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </span>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-skaterboy.jpg"
                class="thumb-link"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/skaterboy.jpg"
                  srcset="
                    images/portfolio/skaterboy.jpg    1x,
                    images/portfolio/skaterboy@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Skaterboy</h3>
              <p class="item-folio__cat">Web Development</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <span class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </span>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-liberty.jpg"
                class="thumb-link"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/liberty.jpg"
                  srcset="
                    images/portfolio/liberty.jpg    1x,
                    images/portfolio/liberty@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Liberty</h3>
              <p class="item-folio__cat">Branding</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <span class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </span>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-minimalismo.jpg"
                class="thumb-link"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/minimalismo.jpg"
                  srcset="
                    images/portfolio/minimalismo.jpg    1x,
                    images/portfolio/minimalismo@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Minimalismo</h3>
              <p class="item-folio__cat">Web Design</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <span class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </span>
          </div>
        </div>

        <div class="masonry__brick">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a
                href="images/portfolio/gallery/g-shutterbug.jpg"
                class="thumb-link"
                data-size="1050x700"
              >
                <img
                  src="images/portfolio/shutterbug.jpg"
                  srcset="
                    images/portfolio/shutterbug.jpg    1x,
                    images/portfolio/shutterbug@2x.jpg 2x
                  "
                  alt=""
                />
                <span class="shadow-overlay"></span>
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Lady Shutterbug</h3>
              <p class="item-folio__cat">Branding</p>
            </div>

            <a
              href="https://www.behance.net/"
              class="item-folio__project-link"
              title="Project link"
            >
              <i class="im im-link"></i>
            </a>

            <span class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </span>
          </div>
        </div> -->
      </div>
    </div>

    <!-- photoswipe background
    ================================================== -->
    <div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button
              class="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>
            <button
              class="pswp__button pswp__button--share"
              title="Share"
            ></button>
            <button
              class="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>
            <button
              class="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            ></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
          >
            <div class="pswp__share-tooltip"></div>
          </div>
          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>
          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
