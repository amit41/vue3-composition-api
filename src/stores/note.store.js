// stores/counter.js
import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content:
            "Veniam reprehenderit consectetur do et Lorem non laboris aliqua. Amet elit aliquip dolor dolore reprehenderit irure aliqua ullamco nulla incididunt. Laborum adipisicing minim minim nostrud veniam. Laboris aliquip cupidatat ullamco sint eiusmod excepteur fugiat irure adipisicing consequat excepteur.",
        },
        {
          id: 2,
          content:
            "Voluptate in magna pariatur veniam eiusmod officia pariatur magna exercitation.",
        },
      ],
    };
  },
  getters: {
    getNoteById(state) {
      return (id) => {
        const searchedNote = state.notes.find(
          (note) => note.id === parseInt(id)
        );
        if (searchedNote) {
          return searchedNote.content;
        } else {
          return "";
        }
      };
    },
    getTotalNotes: (state) => {
      return state.notes.length;
    },
    getTotalCharacters: (state) => {
      let total = 0;
      state.notes.forEach((note) => {
        total += note.content.length;
      });
      return total;
    },
  },
  actions: {
    addNote(newNoteContent) {
      const note = {
        id: this.notes.length + 1,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      });
    },
    updateNote(id, content) {
      const index = this.notes.findIndex((note) => note.id === parseInt(id));
      if (index > -1) {
        this.notes[index].content = content;
      } else {
        console.log(`Note with id: ${id} not found.`);
      }
    },
  },
});
