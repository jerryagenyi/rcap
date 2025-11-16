<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Login</div>
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
          <q-input
            v-model="password"
            label="Password"
            type="password"
            :rules="[val => !!val || 'Password is required']"
            outlined
          />
          <div>
            <q-btn type="submit" color="primary" label="Login" class="full-width" />
            <q-btn flat label="Forgot Password?" to="/auth/forgot-password" class="full-width q-mt-sm" />
            <q-btn flat label="Register" to="/auth/register" class="full-width" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    });
    router.push('/dashboard');
  } catch (error) {
    // Error handled by API interceptor
  } finally {
    loading.value = false;
  }
};
</script>

