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