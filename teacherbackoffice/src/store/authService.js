// authService.js
import { useAuth0 } from '@auth0/auth0-vue';

export async function getAuthToken() {
  const { getAccessTokenSilently } = useAuth0();
  try {
    const token = await getAccessTokenSilently();
    return token;
  } catch (error) {
    console.error('Error getting token:', error);
    throw error;
  }
}
