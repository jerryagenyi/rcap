import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';

/**
 * Authentication guard - checks if user is authenticated
 */
export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'auth-login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
}

/**
 * Guest guard - redirects authenticated users away from auth pages
 */
export function guestGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
}

/**
 * Role guard - checks if user has required role
 */
export function roleGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();
  const requiredRoles = to.meta.requiresRole as string[] | undefined;

  if (requiredRoles && requiredRoles.length > 0) {
    if (!authStore.user || !requiredRoles.includes(authStore.user.role)) {
      next({ name: 'home' });
      return;
    }
  }

  next();
}

