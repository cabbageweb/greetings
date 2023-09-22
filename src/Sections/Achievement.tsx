//Components
import Container from "@/Components/Common/Container";

//Data
const data = [
    { number: "2K+", title: "Happy Kids" },
    { number: "2K+", title: "Happy Kids" },
    { number: "35+", title: "Expert Team" },
    { number: "15+", title: "Years Experience" }
]

const Achievement = () => {
    return (
        <section className="py-16">
            <Container>
                <div className="bg-secondary py-12 px-10 rounded-2xl grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xxs:grid-cols-1 gap-5 md:gap-5 sm:gap-16 xxs:gap-12">
                    {data.map((item, i) => (
                        <div className="text-center" key={i}>
                            <h1 className="text-7xl font-fredoka text-main mb-2">{item.number}</h1>
                            <p className="text-base font-fredoka">{item.title}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Achievement;