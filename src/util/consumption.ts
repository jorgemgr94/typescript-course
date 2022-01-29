export const asyncParallelConsume = async <T, R>(
  collection: T[],
  callback: (value: T) => Promise<R>
) => {
  const promises: Promise<R>[] = [];
  for (let index = 0; index < collection.length; index++) {
    promises.push(callback(collection[index]));
  }
  return await Promise.allSettled(promises);
};

export const asyncBatchConsume = async <T, R>(
  iterator: Iterator<T>,
  callback: (value: T, index: number) => Promise<R>,
  batch: number = 25
) => {
  batch = batch < 1 ? 1 : batch;

  let index = 0;
  const promises: Promise<R>[] = []; /*callbackfn Promises*/
  let batchCount = 0; /*reset with each batch*/
  while (true) {
    const entry = await iterator.next();
    batchCount++;
    promises.push(callback(entry.value, index++));

    if (batchCount % batch === 0 || entry.done) {
      await Promise.allSettled(promises);
    }

    if (entry.done) {
      break;
    }
  }
};
