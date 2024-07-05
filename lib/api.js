const API_URL="https://desafioapi-awef.onrender.com"

export async function registerUser({ profilePic, name, userName, email, password }) {
    const res = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            profilePic,
            name,
            userName,
            email,
            password,
        })
    });

    if (!res.ok) {
        throw new Error('Error al registrar el usuario');
    }

    return res.json();
}


export async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await response.json();
    return json.data.token;
  }