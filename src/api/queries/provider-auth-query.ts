export const providerAuthQuery = async (
  token: string | null,
  provider: string
) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_STRAPI_ENDPOINT
    }/api/auth/${provider}/callback?access_token=${token}`
  );
  // TODO
  // if (!response.ok) {
  //   throw new Error('Error')
  // }
  return response.json();
};
