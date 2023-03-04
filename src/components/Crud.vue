<template>
  <div>CRUD</div>
  <Input />
  <Button>{{ title }}</Button>
  <p v-for="todo in data" :key="todo.id">
    {{ todo.title }}
  </p>
</template>
<script lang="ts">
import Service from "../service/todo";
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    Service.get().then((response) => {
      console.log(response.data);
      this.data = response.data;
    });
  },
  computed: {
    title() {
      let number: number = 33;
      return number;
    },
  },
};
</script>
<style></style>
