<template>
  <div class="current-user">
    <VAvatar :color="avatarColor" size="40"> {{ getInitials(user.name) }} </VAvatar>
    <div class="user-info">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-status">{{ user.status }}</div>
    </div>
  </div>
  <v-divider color="grey-darken-4" :thickness="2" class="mt-2"></v-divider>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

interface User {
  name: string
  status: string
}

const { user, avatarColor } = defineProps({
  user: Object,
  avatarColor: String
})

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}
</script>

<style scoped>
.current-user {
  display: flex;
  align-items: center;
}

.current-user .user-info {
  margin-left: 16px;
}

.current-user .user-name {
  font-weight: bold;
  font-size: 18px;
}

.current-user .user-status {
  font-size: 14px;
  color: #666;
}
</style>
