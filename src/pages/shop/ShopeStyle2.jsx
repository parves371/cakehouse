import React from "react";
import PageLaout from "../../component/layout/PageLaout";
import PageBanner from "../../component/shared/PageBanner";
import ShopStyle2Card from "../../component/card/ShopStyle2";

const products = [
  {
    imageSrc:
      "https://img.freepik.com/free-photo/decadent-chocolate-dessert-with-fresh-raspberry-mint-leaf-generated-by-artificial-intellingence_25030-63058.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Chocolate Fudge Cake",
    description: "A rich, decadent chocolate cake with fudge layers.",
    price: 25.99,
    isTopSeller: true,
    rating: 4.8,
  },
  {
    imageSrc:
      "https://img.freepik.com/premium-photo/slice-red-velvet-cake-plate-with-fork_1019429-3724.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Red Velvet Cake",
    description: "A classic red velvet cake with cream cheese frosting.",
    price: 45.99,
    isTopSeller: true,
    rating: 4.9,
  },
  {
    imageSrc:
      "https://img.freepik.com/premium-photo/cake-with-powdered-sugar-top-it_608068-45863.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Vanilla Sponge Cake",
    description: "Light and fluffy vanilla sponge with a buttercream filling.",
    price: 30.49,
    isTopSeller: false,
    rating: 4.5,
  },
  {
    imageSrc:
      "https://img.freepik.com/free-photo/delicious-strawberry-jelly-cheese-cake-white-plate-with-brown-sugar-cubes-against-red-backdrop_23-2148028512.jpg?ga=GA1.1.1096800660.1727073327&semt=ais_hybrid",
    title: "Strawberry Cheesecake",
    description: "A creamy cheesecake topped with fresh strawberries.",
    price: 50.99,
    isTopSeller: true,
    rating: 4.7,
  },
];

const ShopeStyle2 = () => {
  return (
    <PageLaout>
      <PageBanner name="Shop Style 2" />
      <section class="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div class="container">
          <div class="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[80px] lg:mb-[60px] sm:mb-[50px] mb-[40px]">
            <div class="lg:w-2/3 w-full px-[15px] m-auto">
              <form>
                <div class="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                  <input
                    required="required"
                    type="text"
                    class="form-control bg-white py-[25px] pl-[30px] sm:pr-[150px] pr-20 border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none"
                    placeholder="Type Here"
                  />
                  <div class="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      class="btn btn-primary btn-hover-2 lg:py-[15PX] xl:px-[30px] sm:py-[10px] py-[6px] px-3"
                    >
                      <span class="sm:block hidden">Search</span>
                      <i class="icon-search sm:hidden block text-xl"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="lg:w-1/4 w-full px-[15px]">
              <aside class="lg:sticky top-[100px] lg:pr-5 pb-[1px]">
                <div class="shop-filter">
                  <div class="widget mb-[50px] widget_tag_cloud">
                    <div class="flex justify-between">
                      <div class="widget-title xl:mb-[30px] mb-5 pb-3 relative">
                        <h4 class="text-xl">Current Search</h4>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"
                      >
                        <i class="la la-close font-black"></i>
                      </a>
                    </div>
                    <div class="tagcloud table">
                      <a
                        href="product-detail.html"
                        class="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                      >
                        Burger
                      </a>
                      <a
                        href="product-detail.html"
                        class="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                      >
                        Restaurant
                      </a>
                      <a
                        href="product-detail.html"
                        class="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]"
                      >
                        Pizza
                      </a>
                    </div>
                  </div>
                  <div class="widget dz-widget_services mb-[50px] dz-widget_services">
                    <div class="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                      <h4 class="text-xl">Refine By Categories</h4>
                    </div>

                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-01"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-01"
                      >
                        Pizza
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-02"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-02"
                      >
                        Hamburger
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-03"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-03"
                      >
                        Cold Drink
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-04"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-04"
                      >
                        Sandwich
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-05"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-05"
                      >
                        Muffin
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-06"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-06"
                      >
                        Burrito
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-07"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-07"
                      >
                        Taco
                      </label>
                    </div>
                    <div class="form-check mb-[15px] block">
                      <input
                        class="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none"
                        type="checkbox"
                        value=""
                        id="productCheckBox-08"
                      />
                      <label
                        class="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor"
                        for="productCheckBox-08"
                      >
                        Hot Dog
                      </label>
                    </div>
                  </div>
                  <div class="widget">
                    <div class="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                      <h4 class="text-xl">Price Range</h4>
                    </div>
                    <div class="range-slider style-1 pt-[45px]">
                      <div id="slider-tooltips"></div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div class="lg:w-3/4 w-full px-[15px] lg:order-2 order-1">
              <div class="flex justify-between items-center">
                <h5 class="md:mb-4 lg:mb-6 mb-5 lg:block hidden">
                  Search Results
                </h5>
                <strong class="filter-item-show mb-5 text-bodycolor font-medium">
                  Search: 51,740 items
                </strong>
                <a
                  href="#offcanvasFilter"
                  id="filter-button2"
                  class="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white"
                >
                  Filter
                </a>
              </div>
              <ul class="row">
                {products.map((product) => (
                  <ShopStyle2Card
                    key={product.id}
                    imageSrc={product.imageSrc}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    isTopSeller={product.isTopSeller}
                    rating={product.rating}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLaout>
  );
};

export default ShopeStyle2;
