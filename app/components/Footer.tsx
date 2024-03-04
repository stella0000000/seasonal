import Link from "next/link";

export function Footer() {
  const usdaURL =
    "https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide";
  const openaiURL = "https://platform.openai.com/docs/models/gpt-3-5-turbo";

  return (
    <div className="fixed bottom-0 right-0 p-2 text-xs text-right text-[#737373]">
      Produce data provided by{" "}
      <Link
        className="cursor-default"
        href={usdaURL}
        rel="noopener noreferrer"
        target="_blank"
      >
        USDA.
      </Link>
      Descriptions generated by{" "}
      <Link
        className="cursor-default"
        href={openaiURL}
        rel="noopener noreferrer"
        target="_blank"
      >
        OpenAI
      </Link>
      .
    </div>
  );
}
