<template>
    <v-navigation-drawer :model-value="props.drawer" location="left" temporary>
        <v-list :items="items"></v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        title: 'Chat',
        value: 'chat',
        path: '/chat',
    },
]);

const props = defineProps({
    drawer: Boolean,
})
</script>

<style lang="scss" scoped></style>