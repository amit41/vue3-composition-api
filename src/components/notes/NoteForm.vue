<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { vAutofocus } from "../../directives/v-autofocus";
import { useNote } from "../../services/use-note.services";
import { useNoteStore } from "../../stores/note.store";

let note = ref("");
const newNoteRef = ref(null);

const noteService = useNote();
const noteStore = useNoteStore();
const router = useRouter();

const props = defineProps({
  id: {
    type: String,
  },
});

if (props.id) {
  note.value = noteStore.getNoteById(props.id);
}

const addNote = () => {
  noteService.addNote(note.value);

  note.value = "";
  newNoteRef.value.focus();
};

const updateNote = () => {
  noteService.updateNote(props.id, note.value);
  navigateToNotesRoute();
};

const navigateToNotesRoute = () => {
  router.push({ path: "/" });
};
</script>
<template>
  <div class="card note-form p-4 mb-4 has-background-primary-light">
    <div class="field">
      <label class="label">{{ id ? "Edit Note" : "New Note" }}</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Add a new note"
          v-model="note"
          v-Autofocus
          ref="newNoteRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link has-background-success"
          :disabled="!note"
          v-if="!id"
          @click="addNote"
        >
          Add new note
        </button>
        <button
          class="button is-light mx-5"
          v-if="id"
          @click="navigateToNotesRoute"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-success"
          :disabled="!note"
          v-if="id"
          @click="updateNote"
        >
          Update Note
        </button>
      </div>
    </div>
  </div>
</template>
