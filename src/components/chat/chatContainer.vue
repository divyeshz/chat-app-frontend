<script setup lang="ts">
import { ref } from 'vue'
import chatUserInfo from './chatUserInfo.vue'

function getInitials(name: string): string {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
  return initials.toUpperCase()
}

const currentUser = ref({
  name: 'Ajay Devgan',
  status: 'Typing...'
})
</script>

<template>
  <chatUserInfo :user="currentUser" avatarColor="blue" />
  <div class="chatContainer">
    <div class="message user1">
      <VAvatar color="blue" size="36"> {{ getInitials('Ajay Devgan') }} </VAvatar>
      <div class="message-content">
        <p>Hello! How are you?</p>
      </div>
    </div>
    <div class="message user2">
      <div class="message-content">
        <p>I'm good, thank you! How about you?</p>
      </div>
      <VAvatar color="green" size="36"> {{ getInitials('User Two') }} </VAvatar>
    </div>
    <div class="message user1">
      <VAvatar color="blue" size="36"> {{ getInitials('Ajay Devgan') }} </VAvatar>
      <div class="message-content">
        <p>I'm doing well too, thanks for asking!</p>
      </div>
    </div>
    <div class="message user2">
      <div class="message-content">
        <p>What have you been up to?</p>
      </div>
      <VAvatar color="green" size="36"> {{ getInitials('User Two') }} </VAvatar>
    </div>
    <!-- Add more messages as needed -->
  </div>
</template>

<style scoped>
.chatContainer {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.message {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.message.user1 {
  justify-content: flex-start;
}

.message.user1 .message-content {
  margin-left: 10px;
}

.message.user2 {
  justify-content: flex-end;
}

.message.user2 .message-content {
  margin-right: 10px;
}

.message-content {
  max-width: 60%;
  padding: 10px;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message.user1 .message-content {
  background-color: #d1e7dd;
}

.message.user2 .message-content {
  background-color: #bee5eb;
}
</style>
