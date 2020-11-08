import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
    domain: process.env.AUTH_DOMAIN,
    clientId: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    scope: "openid profile",
    redirectUri: process.env.AUTH_REDIRECT_URI,
    postLogoutRedirectUri: process.env.BASE_URL,
    session: {
        cookieSecret: process.env.COOKIESECRET,
        storeAccessToken: true
    }
});

export default auth0;

// export const isAuthorized = (user, role) => {
//     return (user && user[process.env.AUTH0_NAMESPACE + '/roles'].includes(role));
// }