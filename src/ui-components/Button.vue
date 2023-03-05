<template>
  <button :type="type" :class="type">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.default {
  padding: 5px 14px;
  background-color: #ffffff;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 9999px;
  border-width: 1px;
  border-color: #e5e7eb;
}
.default:hover {
  background-color: #f3f4f6;
  color: #1d4ed8;
}
.delete {
  padding: 5px 14px;
  background-color: #fff;
  color: red;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  border-radius: 9999px;
}
.delete:hover {
  border-color: #e76868;
}
.save {
  background-color: #fff;
  color: #047857;
  padding: 5px 14px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  border-radius: 9999px;
}
.save:hover {
  border-color: #065f46;
}
</style>
