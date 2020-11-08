import Cookie from "js-cookie";

//post token

const setCookies = (token,name) => {
    // 4 jam
    Cookie.set(name, token ,{ expires: new Date(Date.now() + 14400000) })
};

const getCookies = (name)=>{
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

const delCookies = (name) => {
    Cookie.remove(name);
};

export { setCookies, delCookies, tokenAuthenticated,getCookies };