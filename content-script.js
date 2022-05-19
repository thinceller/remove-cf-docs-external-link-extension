function removeExternalIcons() {
  const icons = document.getElementsByClassName("DocsMarkdown--link-external-icon");
  for (const icon of icons) {
    icon.remove();
  }
}

window.addEventListener('load', (event) => {
  removeExternalIcons();
});
