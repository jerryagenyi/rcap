<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Register</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            v-model="name"
            label="Full Name"
            :rules="[val => !!val || 'Name is required']"
            outlined
          />
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
            :rules="[val => !!val || 'Password is required', val => val.length >= 8 || 'Password must be at least 8 characters']"
            outlined
          />
          <q-input
            v-model="passwordConfirmation"
            label="Confirm Password"
            type="password"
            :rules="[val => !!val || 'Please confirm password', val => val === password || 'Passwords do not match']"
            outlined
          />
          <div>
            <q-btn type="submit" color="primary" label="Register" class="full-width" :loading="loading" />
            <q-btn flat label="Login" to="/auth/login" class="full-width q-mt-sm" />
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

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  try {
    await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    });
    router.push('/dashboard');
  } catch (error) {
    // Error handled by API interceptor
  } finally {
    loading.value = false;
  }
};
</script>

