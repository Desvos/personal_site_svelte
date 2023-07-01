
async function loadMarkdownFile(filepath) {
  const response = await fetch(`${filepath}`);
  const text = await response.text();
  return text;
}

export default loadMarkdownFile;