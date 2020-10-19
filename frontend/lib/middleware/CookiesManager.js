import Cookie from "js-cookie";

//post token

const setCookies = (token,name) => {
    // 2 jam
    Cookie.set(name, token ,{ expires: new Date(Date.now() + 7200000) })
};

const getToken = (name)=>{
  const authToken = Cookie.get(name);
  return authToken
}

const tokenAuthenticated = (name) => {
    const authToken = Cookie.get(name);
    if (authToken) {
      return {
        authToken: true,
      };
    }return {
      authToken: false,
    };
};

const delCookie = (name) => {
    Cookie.remove(name);
};

export { setCookies, delCookie, tokenAuthenticated,getToken };