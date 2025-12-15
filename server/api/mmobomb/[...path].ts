export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);
  const path = Array.isArray(params.path)
    ? params.path.join("/")
    : params.path;

  const query = getQuery(event);

  return await $fetch(`https://www.mmobomb.com/${path}`, {
    params: query,
  });
});
