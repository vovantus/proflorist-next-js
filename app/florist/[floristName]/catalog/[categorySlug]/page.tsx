import BouquetList from "@/components/florist/BouquetList/BouquetList";
import floristApi from "@/lib/floristApi";

export default async function BouquetsInCategoryPage({
  params,
}: {
  params: { floristName: string; categorySlug: string };
}) {
  const flotistName = params.floristName;
  const categorySlug = params.categorySlug;
  const category = await floristApi.fetchCategoryInfo(
    flotistName,
    categorySlug
  );
  const bouquets = await floristApi.fetchBouquetsByCategory(
    flotistName,
    undefined,
    category.id
  );

  return (
    <BouquetList
      floristName={flotistName}
      initialBouquets={bouquets}
      categoryId={category.id}
    />
  );
}
