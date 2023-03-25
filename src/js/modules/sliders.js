import Swiper, { Navigation, Pagination, EffectCards } from "swiper";
export const sliders = () => {
  const sliderREviews = new Swiper(".slider-reviews__body", {
    modules: [Navigation, Pagination, EffectCards],

    loop: true,

    pagination: {
      el: ".slider-reviews__pagination",
    },

    effect: "cards",
    cardsEffect: {
      rotate: false,
    },

    navigation: {
      nextEl: ".slider-reviews__arrow_next",
      prevEl: ".slider-reviews__arrow_prev",
    },
  });
};
