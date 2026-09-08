/** Density ramps borrowed from the terminal-chart vocabulary. */
export const GLYPHS = {
  shade: ["·", "░", "▒", "▓", "█"],
  ascii: [".", "-", "=", "#", "@"],
  bar: ["▁", "▂", "▃", "▅", "█"],
} as const;

export function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

/** Map a 0..max value onto a 0..4 intensity step. */
export function intensityLevel(value: number, max: number) {
  if (value <= 0 || max <= 0) return 0;
  return Math.max(1, Math.round(4 * clamp01(value / max)));
}

export function intensityGlyph(level: number, glyphs: readonly string[] = GLYPHS.shade) {
  const step = Math.min(4, Math.max(0, Math.round(level)));
  return glyphs[step] ?? glyphs[0] ?? "·";
}

/** Colour ramp for a 0..4 intensity step. */
export function intensityClass(level: number) {
  const step = Math.min(4, Math.max(0, Math.round(level)));
  if (step <= 0) return "text-graph-frame";
  if (step === 1) return "text-graph-muted";
  if (step === 2) return "text-foreground";
  if (step === 3) return "text-graph-accent-2";
  return "text-graph-accent";
}

/** Reveal stagger: 30ms per item, hard-capped at 280ms. */
export function revealDelay(index: number) {
  return Math.min(index * 0.03, 0.28);
}
