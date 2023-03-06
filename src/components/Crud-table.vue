<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <Input
      @keydown="add"
      v-model="inputValue"
      placeholder="Add Product"
      type="text"
      id="first_name"
    />
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Color</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Accesories</th>
          <th scope="col" class="px-6 py-3">Available</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Weight</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <loader v-if="loading" />
        <tr
          v-for="todo in todos"
          :key="todo?._id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="cursor-default w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <th v-if="selected?._id === todo?._id">
            <Input
              :placeholder="'Enter new title'"
              v-model="selectTitle"
              type="text"
            />
          </th>
          <th
            v-else
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ todo.title }}
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">Yes</td>
          <td class="px-6 py-4">Yes</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4">3.0 lb.</td>
          <td class="flex items-center px-1 py-4 space-x-2">
            <Button @click="edit(todo)" type="default">Edit</Button>
            <Button @click="remove(todo._id)" type="delete">Delete</Button>
            <div v-if="selected?._id === todo?._id">
              <Button type="save" @click="update(todo._id, todo.title)"
                >Save</Button
              >
              <Button type="default" @click="cancel">Cancel</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
      loading: true,
    };
  },
  methods: {
    display() {
      this.loading = true;
      Service.get().then((response) => {
        this.todos = response?.data;
        this.loading = false;
      });
    },
    edit(value) {
      this.selected = value;
      this.selectTitle = value.title;
    },
    update(id) {
      this.loading = true;
      Service.update(id, this.selectTitle).then((_) => {
        this.display();
        this.loading = false;
      });
      this.selected = null;
    },
    cancel() {
      this.selected = null;
    },
    add(e) {
      if (e.key === "Enter") {
        this.loading = true;
        Service.add(e.target.value)
          .then((res) => {
            this.display();
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
          });
        e.target.value = "";
      }
    },

    remove(id) {
      Service.remove(id);
      let removedData = this.todos.filter((value) => value._id !== id);
      this.todos = removedData;
      this.selected = null;
    },
  },
  mounted() {
    this.display();
  },
};
</script>

<style></style>
