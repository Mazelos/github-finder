const urlFormatter = url => {
  const regex = /https?/;
  const isFormatted = regex.test(url);
  
  if (isFormatted) {
    return url
  }

  return `https://${url}`;
}

export default urlFormatter;