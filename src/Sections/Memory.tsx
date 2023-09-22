
//Components
import Container from "@/Components/Common/Container";
import Header from "@/Components/Memory/Header";
import Card from "@/Components/Memory/Card";

const Memory = () => {
    return (
        <section>
            <Container className="py-16">
                <Header />
                <Card />
            </Container>
        </section>
    );
};

export default Memory;