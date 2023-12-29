<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile image" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imageLink = ref(
  'https://politikis.b-cdn.net/wp-content/uploads/2018/11/super-mario-578x430.png'
);
</script>
