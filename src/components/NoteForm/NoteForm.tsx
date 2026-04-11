import css from "./NoteForm.module.css";

function NoteForm() {
  return (
    <form className={css.form}>
      <div className={css.formGroup}>
        <label className={css.label}>Title</label>
        <input className={css.input} type="text" />
      </div>

      <div className={css.formGroup}>
        <label className={css.label}>Content</label>
        <textarea className={css.textarea} />
      </div>

      <div className={css.actions}>
        <button className={css.submitButton} type="submit">
          Create
        </button>
        <button className={css.cancelButton} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
