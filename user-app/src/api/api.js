const baseUrl = "http://localhost:3002"

export const getData = (URL) => {
  return fetch(baseUrl + URL).then((response) => response.json());
};
