export const fetchArticles = async (url) => {
  const response = await fetch(url)
  const allArticles = await response.json()
  console.log(allArticles)
  return allArticles;
}