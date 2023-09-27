<template>
  <input
    type="text"
    :value="modelValue"
    class="mt-2 w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value);
    }
  }
};
</script>
