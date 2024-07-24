import floristApi from "./floristApi";

export async function fetchFlorist(floristName: string) {
  try {
    const florist = await floristApi.fetchFloristInfo(floristName);
    return florist;
  } catch {
    throw new Error("Florist not found");
  }
}
