import { boot } from 'quasar/wrappers';
import { Router } from 'vue-router';
import { authGuard, guestGuard, roleGuard } from '@/router/guards';

export default boot(({ router }: { router: Router }) => {
  // Apply route guards
  router.beforeEach((to, from, next) => {
    // Guest guard (for auth pages)
    if (to.path.startsWith('/auth')) {
      guestGuard(to, from, next);
      return;
    }

    // Auth guard
    if (to.meta.requiresAuth) {
      authGuard(to, from, next);
      return;
    }

    // Role guard
    if (to.meta.requiresRole) {
      roleGuard(to, from, next);
      return;
    }

    next();
  });
});

