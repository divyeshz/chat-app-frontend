<template>
  <div>
    <v-container>
      <v-row class="ma-5 chatInterface">
        <v-col cols="4" class="chatSidebar">
          <chatSidebar />
        </v-col>
        <v-col cols="8" class="chatMain">
          <chatContainer />
          <chatMessageInput />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import chatContainer from './chatContainer.vue'
import chatMessageInput from './chatMessageInput.vue'
import chatSidebar from './chatSidebar.vue'
</script>

<style scoped>
.chatInterface {
  border: solid 1px;
  height: 90vh;
}
.chatSidebar {
  border-right: solid 1px;
}

.chatMain {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
