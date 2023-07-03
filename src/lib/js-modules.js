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