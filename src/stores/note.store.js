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
  },
});
