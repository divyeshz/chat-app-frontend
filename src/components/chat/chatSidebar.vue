<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import chatUserInfo from './chatUserInfo.vue'
import axios from '../../plugins/axios'

// Sample user data
const users = ref([])
const searchQuery = ref('')
const currentUser = ref({
  name: 'Current User',
  status: 'Online'
})

// Fetch User List
const fetchUsers = async () => {
  try {
    const response = await axios.get('user/list')
    if (response.data.status === 200) {
      const fetchedUsers = response.data.data.users.map((user) => ({
        id: user.id,
        name: user.name,
        lastMessage: user.latest_received_messages
          ? user.latest_received_messages.text
          : 'No messages'
      }))
      users.value = fetchedUsers
    }
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

// Get Initials
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

// Computed: Filtered Users
const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Fetch users when component mounts
onMounted(fetchUsers)
</script>

<template>
  <div>
    <chatUserInfo :user="currentUser" avatarColor="blue" />
    <VTextField
      variant="underlined"
      v-model="searchQuery"
      placeholder="Search users"
      prepend-inner-icon="mdi-magnify"
      dense
      hide-details
      class="my-3"
    ></VTextField>
    <VList>
      <VListItem v-for="user in filteredUsers" :key="user.id" class="mb-2">
        <template #prepend>
          <VAvatar color="blue" size="36"> {{ getInitials(user.name) }} </VAvatar>
        </template>
        <VListItemContent>
          <VListItemTitle class="font-weight-bold">{{ user.name }}</VListItemTitle>
          <VListItemSubtitle>{{ user.lastMessage }}</VListItemSubtitle>
        </VListItemContent>
      </VListItem>
    </VList>
  </div>
</template>

<style scoped></style>
