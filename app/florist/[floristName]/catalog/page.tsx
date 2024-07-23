export default function Page({ params }: { params: { subdomain: string } }) {
  return <p>Catalog Page. {params.subdomain}</p>;
}
