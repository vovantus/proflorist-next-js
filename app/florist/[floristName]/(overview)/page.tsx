export default function Page({ params }: { params: { floristName: string } }) {
  return <p>Florist: {params.floristName}. Root</p>;
}
