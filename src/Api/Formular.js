const FORMULAR_API_URL =
  process.env.REACT_APP_FORMULAR_API ||
  'https://my-json-server.typicode.com/nadinho/project-week-5/formular';

export async function postFormular(formular) {
  const response = await fetch(FORMULAR_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formular)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  await response.json();
}
