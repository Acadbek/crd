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
            <input
              class="text-black"
              type="text"
              :value="selected?.title?.title"
            />
          </div>
          <div v-else>
            {{ todo?.title.title }}
          </div>
        </div>
        <div>
          <Button @click="edit(todo)">edit</Button>
          <Button @click="remove(todo.id)">delete</Button>
        </div>
        <div class="flex" v-if="selected?.id === todo?.id">
          <Button @click="save">Save</Button>
          <Button @click="save">Cancel</Button>
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
      newTodo: "",
      inputValue: "asdas",
    };
  },
  methods: {
    edit(value) {
      this.selected = value;
      console.log(this.selected.title.title);
    },
    save() {
      let res = this.todos.map((value, index) =>
        index === this.selected ? { ...value, name: this.newName } : value
      );
      this.todos = res;
      this.selected = null;
      this.newName = "";
    },
    cancel() {
      this.selected = null;
    },
    add(e) {
      if (e.key === "Enter") {
        let data = {
          title: e.target.value,
        };
        Service.add(data);
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
    Service.get().then((response) => (this.todos = response?.data));
  },
};
</script>
