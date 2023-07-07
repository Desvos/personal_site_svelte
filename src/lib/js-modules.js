import pagesList from "./pagesList";

export function sleep(ms) {
  /***
   * Example of usage
      async function init() {
          console.log(1);
          await sleep(10000);
          console.log(2);
      }
  */
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function updateStoreObject(storeObject, obj={}){
  storeObject.update((so) => {
    for(let key in obj) {
      so[key] = obj[key];
    }
    return so;
  })
}

export function getTemplatesUrlHref(url) {
  /* if (browser) {
    url = window.location.href
  } */

  let urlSplitted = url.split('/')
  
  if(urlSplitted[urlSplitted.length - 1] == "")
    urlSplitted.pop()

  return urlSplitted[urlSplitted.length - 2] == "templates" ? "" : urlSplitted[urlSplitted.length - 1]
}

export function getTemplatesPageName(url) {
  let href = getTemplatesUrlHref(url);

  for(let page of pagesList) {
    if (page.href == href)
      return page.name;
  }
}