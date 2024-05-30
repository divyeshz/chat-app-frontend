<script setup lang="ts">
import axios from '../plugins/axios'
import { useHead } from '@unhead/vue'
import { useRouter } from 'vue-router'
import { VForm } from 'vuetify/components/VForm'
import { toast, type ToastOptions } from 'vue3-toastify'
import { ref } from 'vue'

useHead({
  title: 'Registration'
})

const router = useRouter()
const refVForm = ref<VForm>()
const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')

const registration = async () => {
  try {
    await axios
      .post('registration', {
        name: name.value,
        email: email.value,
        password: password.value
      })
      .then(function (response) {
        if (response.data.data.user) {
          toast.success(response.data.message, {
            autoClose: 2000
          } as ToastOptions)
          setTimeout(function () {
            router.push({ path: '/' })
          }, 2500)
        }
      })
      .catch(function (error) {
        if (error.response.data) {
          toast.error(error.response.data.message, {
            autoClose: 2000
          } as ToastOptions)
        }
      })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <v-container class="text-center">
      <v-row class="d-flex justify-center mt-5">
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card title="Registration" elevation="12">
            <VCardText>
              <VForm ref="refVForm" @submit.prevent="registration">
                <VRow>
                  <!-- name -->
                  <VCol cols="12">
                    <VTextField type="text" label="Full Name*" v-model="name" required></VTextField>
                  </VCol>

                  <!-- email -->
                  <VCol cols="12">
                    <VTextField type="email" label="Email*" v-model="email" required></VTextField>
                  </VCol>

                  <!-- password -->
                  <VCol cols="12" class="mb-4">
                    <VTextField type="password" label="Password*" v-model="password" required>
                    </VTextField>

                    <VBtn type="submit" class="mt-4"> Registration </VBtn>
                  </VCol>

                  <!-- create account -->
                  <VCol cols="12" class="text-center">
                    <span>Already user?</span>
                    <RouterLink class="text-primary ms-2 mb-1" :to="{ name: 'Login' }"
                      >Login to your account
                    </RouterLink>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
