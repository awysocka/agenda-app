const baseUrl = "http://localhost:3003"

export const getData = (URL) => {
  return fetch(baseUrl + URL).then((response) => response.json());
};
