<script setup>
import { useNoteStore } from "../stores/note.store";

const noteStore = useNoteStore();
</script>
<template>
  <h1 class="is-size-3">Notes Statistics</h1>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Statistics</th>
        <th>Totals</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Number of notes</td>
        <td>{{ noteStore.getTotalNotes }}</td>
      </tr>
      <tr>
        <td>Total characters of all notes</td>
        <td>{{ noteStore.getTotalCharacters }}</td>
      </tr>
    </tbody>
  </table>
</template>
