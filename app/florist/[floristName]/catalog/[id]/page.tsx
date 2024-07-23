export default function Page({
  params,
}: {
  params: { id: string; floristName: string };
}) {
  const id = params.id;
  return (
    <p>
      Product page: {id}. Florist: {params.floristName}
    </p>
  );
}
