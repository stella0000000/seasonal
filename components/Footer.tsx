import Link from "next/link";

export function Footer() {
  const referenceURL =
    "https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide";

  return (
    <Link
      className="fixed bottom-0 right-0 p-2 text-xs cursor-default"
      href={referenceURL}
      rel="noopener noreferrer"
      target="_blank"
    >
      Produce data provided by the USDA 🌱
    </Link>
  );
}
