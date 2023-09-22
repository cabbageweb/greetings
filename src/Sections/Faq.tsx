//Components
import Container from "@/Components/Common/Container";
import Header from "@/Components/Faq/Header";
import FaqOne from "@/Components/Faq/FaqOne";
import FaqTwo from "@/Components/Faq/FaqTwo";

const Faq = () => {
    return (
        <section>
            <Container className="py-16">
                <Header />
                <div className="grid grid-cols-2 md:grid-cols-2 xxs:grid-cols-1 gap-8 my-16">
                    <FaqOne />
                    <FaqTwo />
                </div>
            </Container>
        </section>
    );
};

export default Faq;