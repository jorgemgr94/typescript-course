export const fakePromise = (timeout: number = 1000) =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), timeout);
  });
