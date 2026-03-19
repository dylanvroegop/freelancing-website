export function trackEvent(event: string, data?: Record<string, string>) {
  if (typeof window !== "undefined") {
    console.log(`[track] ${event}`, data ?? "");
  }
}
