import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/services/api';

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'workshop' | 'campaign' | 'meeting' | 'training' | 'other';
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  organisation?: { id: number; name: string };
  user?: { id: number; name: string };
  tags?: Array<{ id: number; name: string }>;
  evidence?: Array<{ id: number; file_name: string; file_type: string }>;
}

interface CreateActivityData {
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  template_id?: number;
  tags?: number[];
}

export const useActivityStore = defineStore('activity', () => {
  // State
  const activities = ref<Activity[]>([]);
  const currentActivity = ref<Activity | null>(null);
  const loading = ref(false);

  // Actions
  async function fetchActivities(filters?: {
    page?: number;
    status?: string;
    type?: string;
    organisation_id?: number;
  }) {
    loading.value = true;
    try {
      const response = await api.get('/activities', { params: filters });
      activities.value = response.data.data || response.data;
      return response.data;
    } finally {
      loading.value = false;
    }
  }

  async function fetchActivity(id: number) {
    loading.value = true;
    try {
      const response = await api.get(`/activities/${id}`);
      currentActivity.value = response.data;
      return response.data;
    } finally {
      loading.value = false;
    }
  }

  async function createActivity(data: CreateActivityData) {
    loading.value = true;
    try {
      const response = await api.post('/activities', data);
      activities.value.unshift(response.data);
      return response.data;
    } finally {
      loading.value = false;
    }
  }

  async function updateActivity(id: number, data: Partial<CreateActivityData>) {
    loading.value = true;
    try {
      const response = await api.put(`/activities/${id}`, data);
      const index = activities.value.findIndex((activity) => activity.id === id);
      if (index !== -1) {
        activities.value[index] = response.data;
      }
      if (currentActivity.value?.id === id) {
        currentActivity.value = response.data;
      }
      return response.data;
    } finally {
      loading.value = false;
    }
  }

  async function submitActivity(id: number) {
    loading.value = true;
    try {
      const response = await api.post(`/activities/${id}/submit`);
      const index = activities.value.findIndex((activity) => activity.id === id);
      if (index !== -1) {
        activities.value[index] = response.data;
      }
      return response.data;
    } finally {
      loading.value = false;
    }
  }

  async function deleteActivity(id: number) {
    loading.value = true;
    try {
      await api.delete(`/activities/${id}`);
      activities.value = activities.value.filter((activity) => activity.id !== id);
    } finally {
      loading.value = false;
    }
  }

  return {
    // State
    activities,
    currentActivity,
    loading,
    // Actions
    fetchActivities,
    fetchActivity,
    createActivity,
    updateActivity,
    submitActivity,
    deleteActivity,
  };
});

