
import auth0 from '@/utils/auth0';

export default async function me(req, res) {
  try {
    const profile = await auth0.handleProfile(req, res);
    return profile
  } catch(error) {
    res.status(error.status || 400).end(error.message);
  }
}
