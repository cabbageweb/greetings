//Components
import Container from "@/Components/Common/Container";
import Content from "@/Components/About/Content";
import Images from "@/Components/About/Images";

const About = () => {
    return (
        <section id="about" className="pb-16 pt-24">
            <Container className="grid lg:grid-cols-2 xxs:grid-cols-1 lg:gap-4 xxs:gap-12 items-center">
                <Content />
                <Images />
            </Container>
        </section>
    );
};

export default About;