<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_ORGANIZATIONS"
    :action="userStore.ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

import { useUserStore } from '@/stores/user';
import { useJobsStore } from '@/stores/jobs';

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
</script>
