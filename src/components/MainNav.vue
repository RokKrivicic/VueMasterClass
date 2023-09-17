<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuIem in menuItems" :key="menuIem" class="ml-9 h-full first:m-0">
              <a href="" class="flex h-full items-center py-2.5">{{ menuIem }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Rok Careers',
      url: 'https://www.google.com/',
      menuItems: ['Teams', 'Locations', 'Life at Rok Careers', 'How we hire', 'Students', 'Jobs']
    };
  }
};
</script>
