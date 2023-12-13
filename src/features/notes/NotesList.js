import { useGetNotesQuery } from "./notesApiSlice"
import Note from "./Note"

const NotesList = () => {
    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery()

    let content

    if (isLoading) content = <p>Ładowanie...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = notes

        const tableContent = ids?.length
            ? ids.map(noteId => <Note key={noteId} noteId={noteId} />)
            : null

        content = (
            <table className="table table--notes">
                <thead className="table__thead">
                <tr>
                    <th scope="col" className="table__th note__status">Nazwa użytkownika</th>
                    <th scope="col" className="table__th note__created">Utworzono</th>
                    <th scope="col" className="table__th note__updated">Zaktualizowano</th>
                    <th scope="col" className="table__th note__title">Tytuł</th>
                    <th scope="col" className="table__th note__username">Właściciel</th>
                    <th scope="col" className="table__th note__edit">Edytuj</th>
                </tr>
                </thead>
                <tbody>
                {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default NotesList