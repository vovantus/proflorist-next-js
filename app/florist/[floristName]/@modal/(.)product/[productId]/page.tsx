import BouquetDetailes from "@/components/florist/BouquetDetails/BouquetDetails";
import floristApi from "@/lib/floristApi";
import { Modal } from "@/components/florist/Modal/Modal";

export default async function Page() {
  console.log("intercept");
  //   const bouquets = await floristApi.fetchBouquetsById(params.floristName, [
  //     params.productId,
  //   ]);

  return (
    <Modal>
      <div>test</div>
      {/* <BouquetDetailes bouquet={bouquets[0]} /> */}
    </Modal>
  );
}
