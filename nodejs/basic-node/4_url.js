const url = require('url');

const {URL} = url; //구조분해할당
const myURL = new URL('https://www.google.com/search?q=node.js+cd&sca_esv=78bc5112cdd6277c&sxsrf=ADLYWIIIE-5GJ2oDBSEmW-XuzlZ0OtCkcg%3A1736731686376&ei=JmyEZ_jRFtfe2roP3fKJ0Aw&ved=0ahUKEwj4_PHZxfGKAxVXr1YBHV15AsoQ4dUDCBA&uact=5&oq=node.js+cd&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm5vZGUuanMgY2QyCBAAGIAEGMsBMggQABiABBjLATIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIIEAAYCBgKGB4yBhAAGAUYHjIGEAAYCBgeSKUGUE9YtQRwAXgBkAEAmAGpAaABxgOqAQMwLjO4AQPIAQD4AQGYAgSgAugDwgIKEAAYsAMY1gQYR8ICBRAAGIAEmAMAiAYBkAYKkgcDMS4zoAfuEw&sclient=gws-wiz-serp');
// console.log('url===>>', url);
console.log('URL===>>', URL); 
console.log('My URL===>>', myURL);
console.log('urlformat', url.format(myURL));




