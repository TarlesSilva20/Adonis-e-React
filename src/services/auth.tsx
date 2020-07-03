interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fafadjfaffda4faf564a56f456a4f564a65f46a54f6af4af4a',
        user: {
          name: 'Visitante',
          email: 'Visitante@gmail.com',
        },
      });
    }, 2000);
  });
}
