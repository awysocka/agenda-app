const BASE_URL = 'http://localhost:3003';

export const getData = (URL) => {
  return fetch(BASE_URL + URL).then((response) => response.json());
};

export const getSingleData = (URL, id) => {
  return fetch(`${BASE_URL}${URL}/${id}`).then((response) => response.json());
};

export const postData = (URL, data) => {
  return fetch(BASE_URL + URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const deleteData = (URL, id) => {
  return fetch(`${BASE_URL}${URL}/${id}`, {
    method: 'DELETE',
  });
};

export const updateData = (URL, id, data) => {
  return fetch(`${BASE_URL}${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
