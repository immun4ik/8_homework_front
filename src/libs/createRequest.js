export default async function createRequest(options) {
  // const baseUrl = 'http://localhost:7070'; // локальный сервер
  const baseUrl = 'https://ahj-websockets-backend.onrender.com';

  const { method, url, body } = options;

  try {
    const response = await fetch(baseUrl + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.status === 204) {
      return { status: response.status, message: 'Server found!' };
    }

    return await response.json();
  } catch (err) {
    return { error: true, status: 520 };
  }
}
