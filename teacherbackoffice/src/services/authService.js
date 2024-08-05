// src/services/authService.js
import { useAuth0 } from '@auth0/auth0-vue';

export async function getAuthToken() {
  const { getAccessTokenSilently } = useAuth0();
  return await getAccessTokenSilently();
}
