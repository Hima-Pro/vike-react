function usePageTitle(pageContext) {
  const title = pageContext.data?.title || pageContext.config.title || "Vike-React";
  return title;
}

export default usePageTitle;
