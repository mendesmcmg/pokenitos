function IdFinder(originalUrl, urlToRemove) {
  const id = originalUrl.replace(urlToRemove, "").replace("/", "");
  return id;
}

export default IdFinder;
