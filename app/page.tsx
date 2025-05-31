import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Users, Bell } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Pantry App</h1>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Order Fresh Items from Your Local Pantry</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with local vendors, place orders for fresh items, and get notified when your order is ready for
            pickup.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <ShoppingCart className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Easy Ordering</CardTitle>
              <CardDescription>Simple interface to place orders for your favorite pantry items</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Local Vendors</CardTitle>
              <CardDescription>Connect with trusted local vendors in your community</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Real-time Notifications</CardTitle>
              <CardDescription>Get notified instantly when your order is ready for pickup</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start ordering?</h3>
          <p className="text-gray-600 mb-6">Join thousands of customers who trust Pantry App for their daily needs.</p>
          <div className="space-x-4">
            <Link href="/signup">
              <Button size="lg">Sign Up Now</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
