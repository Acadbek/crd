<template>
  <input
    @input="updateInput"
    :value="modelValue"
    class="border text-black"
    type="text"
  />
</template>

<script lang="ts">
export default {
  name: "Input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e: any) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
