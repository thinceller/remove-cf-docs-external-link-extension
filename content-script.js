function removeExternalIcons() {
  const icons = document.getElementsByClassName("DocsMarkdown--link-external-icon");
  while(icons.length !== 0) {
    icons.item(0).remove();
  }
}

removeExternalIcons();
