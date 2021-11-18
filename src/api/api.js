const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const getData = (URL) => {
  return fetch(BASE_URL + URL).then((response) => response.json());
};

export const getSingleData = (URL, id) => {
  return fetch(`${BASE_URL}${URL}/${id}`).then((response) => response.json());
};

export const postData = (URL, data, token) => {
  return fetch(BASE_URL + URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const deleteData = (URL, id, token) => {
  return fetch(`${BASE_URL}${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateData = (URL, id, data, token) => {
  return fetch(`${BASE_URL}${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
