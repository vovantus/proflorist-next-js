import BouquetDetailes from "@/components/florist/BouquetDetails/BouquetDetails";
import floristApi from "@/lib/floristApi";


export default async function ProductPage({
  params,
}: {
  params: { productId: string; floristName: string };
}) {
  const bouquet = await floristApi.fetchBouquetsById(params.floristName, [
    params.productId,
  ]);

  return <BouquetDetailes bouquet={bouquet[0]} />;
}
