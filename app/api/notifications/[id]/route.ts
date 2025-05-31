import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const notificationId = params.id

    await query("UPDATE notifications SET isRead = TRUE WHERE id = ?", [notificationId])

    return NextResponse.json({ message: "Notification marked as read" })
  } catch (error) {
    console.error("Notification update error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
