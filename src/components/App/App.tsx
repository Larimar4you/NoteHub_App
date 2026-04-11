import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import css from "./App.module.css";
import { fetchNotes } from "../../services/noteService";
import NoteList from "../NoteList/NoteList";

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes({ page: 1, perPage: 12 }),
  });

  const notes = data?.notes ?? [];

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* SearchBox */}
        {/* Pagination */}
        {/* Create button */}
      </header>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}

      {/* умова завдання */}
      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}

export default App;
