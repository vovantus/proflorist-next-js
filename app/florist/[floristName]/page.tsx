import BouquetList from "@/components/florist/BouquetList/BouquetList";
import floristApi from "@/lib/floristApi";

const bouquetsOnPage = 15;

export default async function Page({
  params,
}: {
  params: { floristName: string };
}) {
  const flotistName = params.floristName;
  const bouquets = await floristApi.fetchBouquetsByCategory(
    flotistName,
    bouquetsOnPage
  );

  return (
    <BouquetList
      floristName={flotistName}
      initialBouquets={bouquets}
      bouquetsOnPage={bouquetsOnPage}
    />
  );
}
