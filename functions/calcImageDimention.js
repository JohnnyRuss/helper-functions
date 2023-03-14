function calcImageDimention(src) {
  const el = document.createElement('img');
  el.setAttribute('src', src);
  
  const { width, height } = el;

  if (height > width) return 'portrate';
  else if (width / height < 1.7) return 'landscape';
  else if (width / height > 1.7) return 'landscapeLarge';
}

export default calcImageDimention;
