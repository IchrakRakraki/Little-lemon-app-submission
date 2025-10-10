import HeroImage from "./assets/restauranfood.jpg"
import Card from "./Components/Card"

const Main = () => {
    return (
        <main>
            <section id="hero">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
                <img src={HeroImage} alt="3 tomato and basil Bruschettas presented on a black plate" />
            </section>
            <section id="specials">
                <h1>This week's specials!</h1>
                <Card title={""} price={1} description={""} thumbnail=""/>
            </section>
            <section id="testimonials"></section>
            <section id="about"></section>

        </main>
    )
}
export default Main