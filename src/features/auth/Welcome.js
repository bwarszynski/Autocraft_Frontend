import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`AutoCraft: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Witaj {username}!</h1>

            <p><Link to="/dash/notes">Sprawdź notki</Link></p>

            <p><Link to="/dash/notes/new">Dodaj nową notkę</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Sprawdź ustawienia użytkownika</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Dodaj nowego użytkownika</Link></p>}

        </section>
    )

    return content
}
export default Welcome