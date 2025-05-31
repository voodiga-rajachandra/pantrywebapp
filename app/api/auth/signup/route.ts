import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { query } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, role } = await request.json()

    // Check if user already exists
    const existingUser = await query("SELECT id FROM users WHERE email = ?", [email])

    if (existingUser.length > 0) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Insert user
    const result = await query("INSERT INTO users (fullName, email, password, role) VALUES (?, ?, ?, ?)", [
      fullName,
      email,
      hashedPassword,
      role,
    ])

    return NextResponse.json({ message: "User created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
