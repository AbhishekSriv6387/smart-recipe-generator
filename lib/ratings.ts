import { useLocalStorage } from "./useLocalStorage";

export function useRatings() {
  const [ratings, setRatings] = useLocalStorage<Record<string, number>>("ratings", {});
  const rate = (id: string, stars: number) => setRatings({ ...ratings, [id]: stars });
  const get = (id: string) => ratings[id] ?? 0;
  return { ratings, rate, get };
}

export function useFaves() {
  const [faves, setFaves] = useLocalStorage<Record<string, boolean>>("favourites", {});
  const toggle = (id: string) => setFaves({ ...faves, [id]: !faves[id] });
  const has = (id: string) => !!faves[id];
  return { faves, toggle, has };
}
