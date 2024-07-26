import BouquetList from "@/components/florist/BouquetList/BouquetList";
import floristApi from "@/lib/floristApi";


export default async function FloristShowcasePage({
  params,
}: {
  params: { floristName: string };
}) {
  const flotistName = params.floristName;
  const bouquets = await floristApi.fetchBouquetsByCategory(flotistName);

  return <BouquetList floristName={flotistName} initialBouquets={bouquets} />;
}
