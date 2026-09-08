/**
 * A single timestamp shared between the server render and client hydration.
 * Duration labels ("6.5y", "Present") are derived from it, so they cannot
 * disagree if a render straddles a month or year boundary.
 */
export function useRenderTime() {
  const timestamp = useState("render-time", () => Date.now());
  return computed(() => new Date(timestamp.value));
}
