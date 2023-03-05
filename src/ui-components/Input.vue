<template>
  <input
    @input="updateInput"
    :value="modelValue"
    type="text"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :placeholder="placeholder"
    required
  />
</template>

<script lang="ts">
export default {
  name: "Input",
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(e: any) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
