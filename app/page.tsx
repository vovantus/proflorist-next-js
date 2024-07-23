export default function Home({ params }: { params: { subdomain: string } }) {
  return <h1>Platform root {params.subdomain}</h1>;
}
