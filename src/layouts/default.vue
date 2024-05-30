<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div>
    <v-app>
      <Header />
      <v-main>
        <v-container fluid>
          <RouterView />
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<style lang="scss" scoped></style>
