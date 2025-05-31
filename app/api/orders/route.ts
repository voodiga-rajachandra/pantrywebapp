import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { userId, fullName, items } = await request.json()

    const result = await query("INSERT INTO orders (userId, fullName, items, status) VALUES (?, ?, ?, 'pending')", [
      userId,
      fullName,
      items,
    ])

    return NextResponse.json({ message: "Order placed successfully", orderId: result.insertId }, { status: 201 })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 })
    }

    const orders = await query("SELECT * FROM orders WHERE userId = ? ORDER BY createdAt DESC", [userId])

    return NextResponse.json({ orders })
  } catch (error) {
    console.error("Orders fetch error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
