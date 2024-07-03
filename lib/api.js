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