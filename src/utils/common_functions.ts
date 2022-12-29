export function sleep(durationInMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, durationInMs);
  });
}

export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
