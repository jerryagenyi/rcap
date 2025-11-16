import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { api } from '@/services/api';

interface User {
  id: number;
  email: string;
  name: string;
  role: 'super_admin' | 'admin' | 'sub_admin' | 'user';
  organisation?: {
    id: number;
    name: string;
  };
  profile_picture?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  organisation_id?: number;
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem('auth_token'));

  // Getters
  const isAuthenticated = computed(() => !!token.value && !!user.value);
  const userRole = computed(() => user.value?.role || null);
  const userOrganisation = computed(() => user.value?.organisation || null);

  // Actions
  async function login(credentials: LoginCredentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      token.value = response.data.token;
      user.value = response.data.user;
      localStorage.setItem('auth_token', token.value);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function register(data: RegisterData) {
    try {
      const response = await api.post('/auth/register', data);
      token.value = response.data.token;
      user.value = response.data.user;
      localStorage.setItem('auth_token', token.value);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      // Continue with logout even if API call fails
    } finally {
      token.value = null;
      user.value = null;
      localStorage.removeItem('auth_token');
    }
  }

  async function fetchUser() {
    try {
      const response = await api.get('/users/me');
      user.value = response.data;
      return response.data;
    } catch (error) {
      // If fetch fails, user might not be authenticated
      token.value = null;
      user.value = null;
      localStorage.removeItem('auth_token');
      throw error;
    }
  }

  async function refreshToken() {
    try {
      const response = await api.post('/auth/refresh');
      token.value = response.data.token;
      localStorage.setItem('auth_token', token.value);
      return response.data;
    } catch (error) {
      // If refresh fails, logout user
      await logout();
      throw error;
    }
  }

  // Initialize: fetch user if token exists
  if (token.value) {
    fetchUser().catch(() => {
      // Silent fail on init
    });
  }

  return {
    // State
    user,
    token,
    // Getters
    isAuthenticated,
    userRole,
    userOrganisation,
    // Actions
    login,
    register,
    logout,
    fetchUser,
    refreshToken,
  };
});

