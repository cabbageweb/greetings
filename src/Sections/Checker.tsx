import Script from "next/script";
import { AnimationOnScroll } from "react-animation-on-scroll";

//Components
import Container from "@/Components/Common/Container";

const Checker = () => {
    return (
        <section>
            <Container className="py-16">
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
                    <h5 className="text-5xl sm:text-5xl xxs:text-4xl font-fredoka text-center mb-5">Check The Delivery</h5>
                    <div id="deliverychecker-container" data-widget-id="1648b7d18e4ef7"></div>
                    <Script strategy="lazyOnload" id="checker">
                        {`
                (function() {
                    var a = document.createElement("script");
                    a.type = "text/javascript";
                    a.async = true;
                    a.src = "https://cdn.deliverychecker.co/api/v1/js/1648b7d18e4ef7.js";
                    var b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b);
                })();
                `}
                    </Script>
                </AnimationOnScroll>
            </Container>
        </section>
    );
};

export default Checker;
