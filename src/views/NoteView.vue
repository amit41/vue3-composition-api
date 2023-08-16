<script setup>
import Note from "../components/notes/Note.vue";
import NoteForm from "../components/notes/NoteForm.vue";
import { useNoteStore } from "../stores/note.store.js";

const noteStore = useNoteStore();
</script>
<template>
  <div class="notes-ctn">
    <NoteForm />

    <div class="notes">
      <Note v-for="note in noteStore.notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>
