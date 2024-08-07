export const getValidSubdomain = (host?: string | null) => {
  let subdomain: string | null = null;
  if (!host && typeof window !== "undefined") {
    host = window.location.host;
  }
  if (host && host.includes(".")) {
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    subdomain = arr.length > 0 ? arr[0] : "";
  }
  return subdomain;
};
