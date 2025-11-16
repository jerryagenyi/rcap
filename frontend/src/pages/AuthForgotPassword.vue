<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Forgot Password</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            :rules="[val => !!val || 'Email is required']"
            outlined
          />
          <div>
            <q-btn type="submit" color="primary" label="Send Reset Link" class="full-width" :loading="loading" />
            <q-btn flat label="Back to Login" to="/auth/login" class="full-width q-mt-sm" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { api } from '@/services/api';
import { Notify } from 'quasar';

const email = ref('');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await api.post('/auth/forgot-password', { email: email.value });
    Notify.create({
      type: 'positive',
      message: 'Password reset link sent to your email',
    });
  } catch (error) {
    // Error handled by API interceptor
  } finally {
    loading.value = false;
  }
};
</script>

