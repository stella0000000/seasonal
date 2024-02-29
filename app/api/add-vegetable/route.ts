import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const vegetableName = searchParams.get("vegetableName");
  const season = searchParams.get("season");

  try {
    if (!vegetableName || !season)
      throw new Error("Vegetable and season required");
    await sql`INSERT INTO Vegetables (Name, Season) VALUES (${vegetableName}, ${season});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const vegetables = await sql`SELECT * FROM Vegetables;`;
  return NextResponse.json({ vegetables }, { status: 200 });
}
