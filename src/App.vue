<script setup lang="ts">
import { useRoute } from 'vue-router'
import Default from './layouts/default.vue'
import Blank from './layouts/blank.vue'

const route = useRoute()
</script>

<template>
  <Default v-if="route.meta.layout !== 'blank'" />
  <Blank v-if="route.meta.layout === 'blank'" />
</template>

<style scoped></style>
