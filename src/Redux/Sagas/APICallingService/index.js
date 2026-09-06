function getToken() {
  return localStorage.getItem("token") || localStorage.getItem("accessToken") || "";
}

async function parseResponse(response) {
  let data = {};

  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }

  return { response, data };
}

async function request(url, options = {}) {
  let headers = { ...(options.headers || {}) };
  let token = getToken();

  if (!options.isMultipart) {
    headers["content-type"] = headers["content-type"] || "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}${url}`, {
    ...options,
    headers,
  });

  if (response.status === 401 && !options.skipRefresh && url !== "/auth/refresh-token") {
    let refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      let refreshResponse = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/auth/refresh-token`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      let refreshData = await refreshResponse.json().catch(() => ({}));

      if (refreshResponse.ok && refreshData.result !== "Fail") {
        localStorage.setItem("token", refreshData.data.accessToken);
        localStorage.setItem("accessToken", refreshData.data.accessToken);

        if (refreshData.data.refreshToken) {
          localStorage.setItem("refreshToken", refreshData.data.refreshToken);
        }

        headers.Authorization = `Bearer ${refreshData.data.accessToken}`;

        response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}${url}`, {
          ...options,
          headers,
        });
      }
    }
  }

  return parseResponse(response);
}

export async function createRecord(collection, payload) {
  try {
    return await request(`/${collection}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function createMultipartRecord(collection, payload) {
  try {
    return await request(`/${collection}`, {
      method: "POST",
      body: payload,
      isMultipart: true,
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function getRecord(collection, query = "") {
  try {
    return await request(`/${collection}${query ? `?${query}` : ""}`, {
      method: "GET",
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function getRecordById(collection, id) {
  try {
    return await request(`/${collection}/${id}`, {
      method: "GET",
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function updateRecord(collection, payload) {
  try {
    return await request(`/${collection}/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function updateRecordById(collection, id, payload) {
  try {
    return await request(`/${collection}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function updateRecordPath(path, payload) {
  try {
    return await request(`/${path}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function patchRecord(collection, path, payload) {
  try {
    return await request(`/${collection}/${path}`, {
      method: "PATCH",
      body: payload === undefined ? undefined : JSON.stringify(payload),
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function deleteRecordById(collection, id) {
  try {
    return await request(`/${collection}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}

export async function authRecord(path, payload, method = "POST") {
  try {
    return await request(`/auth/${path}`, {
      method,
      body: payload === undefined ? undefined : JSON.stringify(payload),
      skipRefresh: true,
    });
  } catch (error) {
    console.log(error);
    return { response: { ok: false }, data: { result: "Fail", reason: error.message } };
  }
}
