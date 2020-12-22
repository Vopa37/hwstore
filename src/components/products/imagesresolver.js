const images = {
  mac202013touchspace: "mac2020_13_touch_space.png",
  mac201715touchspace: "mac2017_15_touch_space.png",
  mac202016touchspace: "mac2020_16_touch_space.png",
  mac201215space: "mac2012_15_space.png",
  mac201213space: "mac2012_13_space.png",
  mac201712space: "mac2017_12_space.png",
  mac201315space: "mac2013_15_space.png",
  mac201413space: "mac2014_13_space.png",
  dell5580: "dell5580.png",
  dell7590: "dell7590.png",
  delle6500: "delle6500.png",
  delle6540: "delle6540.png",
  delle6520: "delle6520.png",
  delle7450: "delle7450.png",
  hp450g6: "hp450g6.png",
  lenovos740: "lenovos740.png",
  asuszenbook: "asuszenbook.png",
  hp27fw: "hp27fw.png",
  epsonebw22: "epsonebw22.png",
  benqmx520: "benqmx520.png",
};

export const resolveImage = (image) => {
  return images[image];
};
