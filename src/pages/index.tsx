
//Layout
import Layout from "@/Layout";

//Components
import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import Achievement from "@/Sections/Achievement";
import Service from "@/Sections/Service";
import Video from "@/Sections/Video";
import Book from "@/Sections/Book";
import Memory from "@/Sections/Memory";
import Happiness from "@/Sections/Happiness";
import Testimonial from "@/Sections/Testimonial";
import Vendor from "@/Sections/Vendor";
import Faq from "@/Sections/Faq";
import Checker from "@/Sections/Checker";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Achievement />
      <Service />
      <Video />
      <Book />
      <Checker />
      <Memory />
      <Happiness />
      <Testimonial />
      <Vendor />
      <Faq />
    </Layout>
  );
};

export default Home;