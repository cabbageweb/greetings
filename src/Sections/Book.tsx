//Components
import Container from "@/Components/Common/Container";
import Form from "@/Components/Book/Form";
import Content from "@/Components/Book/Content";

const Book = () => {
    return (
        <section>
            <Container className="grid lg:grid-cols-2 xxs:grid-cols-1 gap-10 items-center py-16">
                <Form />
                <Content />
            </Container>
        </section>
    );
};

export default Book;