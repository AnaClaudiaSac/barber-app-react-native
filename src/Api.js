const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checktoken: async token => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'Post',
      header: {
        Accept: 'application/json',
        'Context-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'Post',
      header: {
        Accept: 'application/json',
        'Context-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    return json;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'Post',
      header: {
        Accept: 'application/json',
        'Context-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await req.json();
    return json;
  },
};
