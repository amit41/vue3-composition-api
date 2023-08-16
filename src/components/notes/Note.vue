<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useNote } from "../../services/use-note.services";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const contentLength = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? "Characters" : "Character";

  return `${length} ${description}`;
});

const noteService = useNote();

const onDeleteNote = () => {
  noteService.deleteNote(props.note.id);
};

const onEditNote = () => {
  router.push({ name: "editNote", params: { id: props.note.id } });
};
</script>
<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="content-length has-text-right has-text-grey-light">
          {{ contentLength }}
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click.prevent="onEditNote">Edit</a>
      <a
        href="#"
        class="card-footer-item has-text-danger-dark"
        @click="onDeleteNote"
        >Delete</a
      >
    </footer>
  </div>
</template>
