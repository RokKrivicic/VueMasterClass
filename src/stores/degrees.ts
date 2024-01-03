import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Degree } from '@/api/types';
import getDegrees from '@/api/getDegrees';

export const useDegreesStore = defineStore('degrees', () => {
  const degrees = ref<Degree[]>([]);

  const FETCH_DEGREES = async () => {
    const receivedDegress = await getDegrees();
    degrees.value = receivedDegress;
  };

  const UNIQUE_DEGREES = computed(() => degrees.value.map((degree) => degree.degree));

  return { degrees, FETCH_DEGREES, UNIQUE_DEGREES };
});
