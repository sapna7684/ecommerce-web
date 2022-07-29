import { Category } from "../components/categories/Category";
import { Announcement } from "../components/header/Announcement";
import { Header } from "../components/header/Header";
import { BannerSlider } from "../components/slider/BannerSlider";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <BannerSlider/>
      <Category/>
    </div>
  );
};
