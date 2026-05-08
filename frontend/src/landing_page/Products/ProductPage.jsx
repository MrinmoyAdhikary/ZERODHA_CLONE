import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="..\src\assets\products-kite.png"
        title="Kite"
        data="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1Name="Try Demo"
        link2Name="Learn More"
      />
      <RightSection
        imageUrl="..\src\assets\products-console.png"
        title="Console"
        data="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1Name="Learn More"
      />
      <LeftSection
        imageUrl="..\src\assets\products-coin.png"
        title="Coin"
        data="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1Name="Coin"
      />
      <RightSection
        imageUrl="..\src\assets\products-kite.png"
        title="Kite Connect API"
        data="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1Name="Kite Connect"
      />
      <LeftSection
        imageUrl="..\src\assets\varsity-products.svg"
        title="Varsity Mobile"
        data="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <Universe/>
    </>
  );
}

export default ProductPage;
