<template>
  <div class="text-white">
    <Input @keydown="add" v-model="inputValue" />
    <Button @click="add">Add</Button>
    <div>
      <div
        class="flex items-center justify-between"
        v-for="todo in todos"
        :key="todo?.id"
      >
        <div>
          <div v-if="selected?.id === todo?.id">
            <Input type="text" v-model="selectTitle" />
          </div>
          <div v-else>
            <span>{{ todo.id }}</span>
            {{ todo?.title }}
          </div>
        </div>
        <div>
          <Button @click="edit(todo)">edit</Button>
          <Button @click="remove(todo.id)">delete</Button>
        </div>
        <div class="flex" v-if="selected?.id === todo?.id">
          <Button @click="update(todo.id, todo.title)">Save</Button>
          <Button @click="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/service/todo";
export default {
  data() {
    return {
      todos: [],
      selected: null,
      inputValue: "",
      selectTitle: "",
    };
  },
  methods: {
    display() {
      Service.get().then((response) => (this.todos = response?.data));
    },
    edit(value) {
      this.selected = value;
      this.selectTitle = value.title;
    },
    update(id) {
      Service.update(id, this.selectTitle).then((_) => {
        this.display();
      });
      this.selected = null;
    },
    cancel() {
      this.selected = null;
    },
    add(e) {
      if (e.key === "Enter") {
        Service.add(e.target.value)
          .then(() => {
            this.display();
          })
          .catch((err) => {
            console.log(err);
          });
        e.target.value = "";
      }
    },

    remove(id) {
      Service.remove(id);
      let removedData = this.todos.filter((value) => value.id !== id);
      this.todos = removedData;
      this.selected = null;
    },
  },
  mounted() {
    this.display();
  },
};
</script>
