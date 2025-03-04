const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const mime = require('mime-types');

// Install required packages: npm install cheerio mime-types

async function createSingleFile() {
  const htmlPath = path.join(process.cwd(), 'out', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(html);
  
  // Inline all CSS
  $('link[rel="stylesheet"]').each((i, elem) => {
    const href = $(elem).attr('href');
    if (href && !href.startsWith('http')) {
      try {
        const cssPath = path.join(process.cwd(), 'out', href.split('?')[0]);
        if (fs.existsSync(cssPath)) {
          const css = fs.readFileSync(cssPath, 'utf8');
          $(elem).replaceWith(`<style>${css}</style>`);
        }
      } catch (err) {
        console.warn(`Could not inline CSS: ${href}`, err);
      }
    }
  });
  
  // Inline all JS
  $('script').each((i, elem) => {
    const src = $(elem).attr('src');
    if (src && !src.startsWith('http')) {
      try {
        const jsPath = path.join(process.cwd(), 'out', src.split('?')[0]);
        if (fs.existsSync(jsPath)) {
          const js = fs.readFileSync(jsPath, 'utf8');
          $(elem).removeAttr('src').text(js);
        }
      } catch (err) {
        console.warn(`Could not inline JS: ${src}`, err);
      }
    }
  });

  // Inline all images
  $('img').each((i, elem) => {
    const src = $(elem).attr('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
      try {
        const imgPath = path.join(process.cwd(), 'out', src.split('?')[0]);
        if (fs.existsSync(imgPath)) {
          const mimeType = mime.lookup(imgPath) || 'image/png';
          const imgBuffer = fs.readFileSync(imgPath);
          const dataUri = `data:${mimeType};base64,${imgBuffer.toString('base64')}`;
          $(elem).attr('src', dataUri);
        }
      } catch (err) {
        console.warn(`Could not inline image: ${src}`, err);
      }
    }
  });
  
  // Handle background images in inline styles
  $('[style*="background"]').each((i, elem) => {
    const style = $(elem).attr('style');
    if (style && style.includes('url(')) {
      // This is a simplified approach - a more robust regex would be needed for production
      const urlMatch = /url\(['"]?([^'"()]+)['"]?\)/g;
      let newStyle = style;
      let match;
      
      while ((match = urlMatch.exec(style)) !== null) {
        const imgSrc = match[1];
        if (!imgSrc.startsWith('http') && !imgSrc.startsWith('data:')) {
          try {
            const imgPath = path.join(process.cwd(), 'out', imgSrc.split('?')[0]);
            if (fs.existsSync(imgPath)) {
              const mimeType = mime.lookup(imgPath) || 'image/png';
              const imgBuffer = fs.readFileSync(imgPath);
              const dataUri = `data:${mimeType};base64,${imgBuffer.toString('base64')}`;
              newStyle = newStyle.replace(imgSrc, dataUri);
            }
          } catch (err) {
            console.warn(`Could not inline background image: ${imgSrc}`, err);
          }
        }
      }
      
      $(elem).attr('style', newStyle);
    }
  });

  fs.writeFileSync(path.join(process.cwd(), 'standalone.html'), $.html());
  console.log('Created standalone.html');
}

createSingleFile();