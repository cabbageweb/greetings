
//Components
import Container from "@/Components/Common/Container";
import Header from "@/Components/Testimonial/Header";
import Carousel from "@/Components/Testimonial/Carousel";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <Container className="py-16">
                <Header />
                <Carousel />
            </Container>
        </section>
    );
};

export default Testimonial;