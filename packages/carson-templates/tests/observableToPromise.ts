import type Observable from 'zen-observable';

export async function observableToPromise(observable: Observable<unknown>) {
  return new Promise<void>((resolve, reject) => {
    observable.subscribe({
      error(error: Error) {
        reject(error);
      },
      complete() {
        resolve();
      },
    });
  });
}
