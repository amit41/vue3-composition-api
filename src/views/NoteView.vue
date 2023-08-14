<script setup>
import { ref } from "vue";
import Note from "../components/notes/Note.vue";
import { useNoteStore } from "../stores/note.store.js";

const noteStore = useNoteStore();
const newNote = ref("");
const newNoteRef = ref(null);
const addNote = () => {
  noteStore.addNote(newNote.value);

  newNote.value = "";
  newNoteRef.value.focus();
};

const deleteNote = (id) => {
  noteStore.deleteNote(id);
};
</script>
<template>
  <div class="notes">
    <div class="card note-form p-4 mb-4 has-background-primary-light">
      <div class="field">
        <label class="label">New Note</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new note"
            v-model="newNote"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>
    <div class="notes">
      <Note
        v-for="note in noteStore.notes"
        :key="note.id"
        :note="note"
        @onDeleteNote="deleteNote"
      />
    </div>
  </div>
</template>
