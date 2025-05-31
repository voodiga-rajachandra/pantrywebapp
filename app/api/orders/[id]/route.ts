import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { status } = await request.json()
    const orderId = params.id

    // Update order status
    await query("UPDATE orders SET status = ? WHERE id = ?", [status, orderId])

    // If order is ready, create notification
    if (status === "ready") {
      const orders = await query("SELECT userId, fullName, items FROM orders WHERE id = ?", [orderId])

      if (orders.length > 0) {
        const order = orders[0]
        await query("INSERT INTO notifications (userId, message) VALUES (?, ?)", [
          order.userId,
          `Your order "${order.items}" is ready for pickup!`,
        ])
      }
    }

    return NextResponse.json({ message: "Order updated successfully" })
  } catch (error) {
    console.error("Order update error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
