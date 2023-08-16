import { useNoteStore } from "../stores/note.store.js";
export const useNote = () => {
  const noteStore = useNoteStore();
  const addNote = (note) => {
    noteStore.addNote(note);
  };

  const deleteNote = (id) => {
    noteStore.deleteNote(id);
  };
  const updateNote = (id, content) => {
    noteStore.updateNote(id, content);
  };

  return { addNote, deleteNote, updateNote };
};
