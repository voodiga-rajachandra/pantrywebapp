import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const orders = await query("SELECT * FROM orders ORDER BY createdAt DESC")

    return NextResponse.json({ orders })
  } catch (error) {
    console.error("Vendor orders fetch error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
