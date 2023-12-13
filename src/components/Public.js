import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Witaj w <span className="nowrap">AutoCraft</span></h1>
            </header>
            <main className="public__main">
                <p>Zlokalizowany w centrum Miasta, Autocraft, zapewni najlepszą kadrę do rozwiązania twoich problemów!</p>
                <address className="public__addr">
                    AutoCraft<br />
                    ul. Podmiejska 21<br />
                    89-037 Miasto<br />
                    <a href="tel:+48789234150">+48 789 234 150</a>
                </address>
                <br />
                <p>Właściciel: Jan Kowalski</p>
            </main>
            <footer>
                <Link to="/login">Logowanie pracownika</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
