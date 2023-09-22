
//Components
import Container from "@/Components/Common/Container";
import Header from "@/Components/Vendor/Header";
import Card from "@/Components/Vendor/Card";

const Vendor = () => {
    return (
        <section>
            <Container className="py-16">
                <div className="bg-secondary p-10 rounded-lg">
                    <Header />
                    <Card />
                </div>
            </Container>
        </section>
    );
};

export default Vendor;