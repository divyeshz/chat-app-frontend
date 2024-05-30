<template>
  <div>
    <v-row>
      <v-col cols="11" md="11">
        <VTextField
          placeholder="Type Your Message here"
          type="text"
          v-model="message"
          required
        ></VTextField>
      </v-col>

      <v-col cols="1" md="1">
        <v-btn icon="mdi-send-variant" class="bg-teal" variant="tonal"> </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('')
</script>

<style scoped></style>
