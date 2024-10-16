export const fakePromise = (timeout: number = 1000) =>
  new Promise(function (resolve) {
    setTimeout(() => resolve("done"), timeout);
  });
