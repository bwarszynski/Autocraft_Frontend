import { Link } from 'react-router-dom'
import React from "react";

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Witaj!</h1>

            <p><Link to="/dash/notes">Notki</Link></p>

            <p><Link to="/dash/users">Ustawienia użytkownika</Link></p>

        </section>
    )

    return content
}
export default Welcome