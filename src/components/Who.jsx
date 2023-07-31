import Carousel from "./Carousel";
import "./Who.css";

function Who() {
    const images = [
        "../assets/1.webp",
        "../assets/2.webp",
        "../assets/11.webp",
    ];
    return (
        <section id="who" className="slides">
            <div className="container">
                <h2 className="slides__title">
                    <span className="slides__title_pink"> Мы</span> — в первую
                    очередь{" "}
                    <span className="slides__title_pink">сообщество</span>
                </h2>
                <div className="slides__row">
                    <p className="slides__text">
                        Мы существуем для того, чтобы у вас на новом месте
                        появились знакомые, друзья и коллеги. Чтобы никто не был
                        один. Наши конфы проходят в формате уютной домашней
                        вечеринки.
                    </p>
                    <p className="slides__text">
                        Специально для того, чтобы людям было проще сойтись и
                        подружиться.После самого ивента сообщество продолжает
                        жить в чате, бесчисленных встречах, сборах и где угодно
                        ещё.
                    </p>
                </div>
                <Carousel data={images} />
            </div>
        </section>
    );
}

export default Who;
