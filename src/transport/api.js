const baseUrl = "http://localhost:8080/flat-app-1.0-SNAPSHOT/v1";

export async function getResponse(url, params) {
    let response = await fetch(url, params);

    let text;
    if (response.ok) {
        text = await response.text();
        return text;
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
}

export async function login({ login, password }) {
    console.log("fetch /login");

    const result = await getResponse(
        `${baseUrl}/login?login=${login}&password=${password}`,
        {
            method: "GET",
        }
    );

    console.log(result);
    return result;
}

export async function register({ login, password }) {
    console.log("fetch /register");
    let data = { login: login, password: password };

    const result = await getResponse(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log(result);
    return result;
}

export async function send({ token, data }) {
    console.log("fetch /plans");

    const result = await getResponse(`${baseUrl}/plans/rooms`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log(result);
    return result;
}
