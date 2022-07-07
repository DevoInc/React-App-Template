import { useEffect, useState } from 'react';

/**
 * Hook to manage async calls in function components
 * preventing perform state changes on unmounted components.
 *
 * @param promise - Target primise to be hooked.
 * @param defaultValue - Initial default value.
 * @param deps - Dependency list to control the effect.
 *
 * @returns
 * Array with the current value, any possible error from the promise and a boolean that indicates if the promise is pending.
 */
export function usePromise<T>(
  promise: () => Promise<T>,
  defaultValue: T,
  deps: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
): [T, Error | undefined, boolean] {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isPending, setIsPending] = useState<boolean>(true);

  useEffect(() => {
    let isSubscribed = true;

    setError(undefined);
    setIsPending(true);

    promise()
      .then((nextValue) => {
        if (isSubscribed) {
          if (nextValue != defaultValue) {
            setValue(nextValue);
          }
          setIsPending(false);
        }
      })
      .catch((nextError) => {
        if (isSubscribed) {
          setError(nextError as Error);
          setValue(defaultValue);
          setIsPending(false);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return [value, error, isPending];
}
