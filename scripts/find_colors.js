const https = require('https');

https.get('https://www.prometric-jp.com/ssw/test_list/archives/14', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const cssLinks = data.match(/href="([^"]+\.css)"/g);
    console.log("CSS LINKS:", cssLinks);
  });
});
