<script setup lang="ts">
useHead({
  title: 'Vitesse fsd',
  meta: [
    { name: 'description', content: 'Vitesse fsd template' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon-dark.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
