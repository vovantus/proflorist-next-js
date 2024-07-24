import FloristAppBar from "@/components/florist/FloristAppBar/FloristAppBar";

const pages = [
  { text: "About", to: "/about" },
  { text: "Contacts", to: "/contacts" },
  { text: "Delivery", to: "/delivery" },
];

export default function Header({ floristName }: { floristName: string }) {
  return <FloristAppBar floristName={floristName} pages={pages} />;
}
