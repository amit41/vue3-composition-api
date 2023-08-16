<script setup>
import NoteForm from "../components/notes/NoteForm.vue";
</script>
<template>
  <NoteForm :id="$route.params.id" />
</template>
