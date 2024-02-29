import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fruitName = searchParams.get("fruitName");
  const season = searchParams.get("season");

  try {
    if (!fruitName || !season) throw new Error("Fruit and season required");
    await sql`INSERT INTO Fruits (Name, Season) VALUES (${fruitName}, ${season});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const fruits = await sql`SELECT * FROM Fruits;`;
  return NextResponse.json({ fruits }, { status: 200 });
}
