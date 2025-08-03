"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Car,
  User,
  CheckCircle,
  AlertTriangle,
  Star,
  ChevronRight,
} from "lucide-react"

export default function TrackingPage({ params }: { params: { id: string } }) {
  const [booking, setBooking] = useState({
    id: params.id,
    service: "Emergency Buddy Rush",
    status: "in-progress",
    buddyName: "Rajesh Kumar",
    buddyPhone: "+91 98765 43210",
    buddyRating: 4.8,
    vehicle: "Two Wheeler",
    location: "Malviya Nagar, Jaipur",
    estimatedTime: "12 mins",
    amount: 299,
    createdAt: "2024-01-15T10:30:00Z",
    buddyLocation: { lat: 26.8467, lng: 75.8148 },
    customerLocation: { lat: 26.85, lng: 75.82 },
  })

  const [trackingSteps, setTrackingSteps] = useState([
    { step: "Booking Confirmed", time: "10:30 AM", completed: true, active: false },
    { step: "Buddy Assigned", time: "10:32 AM", completed: true, active: false },
    { step: "Buddy En Route", time: "10:35 AM", completed: true, active: true },
    { step: "Buddy Arrived", time: "Expected 10:47 AM", completed: false, active: false },
    { step: "Service Completed", time: "Pending", completed: false, active: false },
  ])

  const [estimatedTime, setEstimatedTime] = useState(12)

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setEstimatedTime((prev) => Math.max(0, prev - 1))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
              >
                EV BUDDY
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                Dashboard
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="/dashboard" className="hover:text-blue-600 transition-colors">
            Dashboard
          </a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">Track Booking</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your EV BUDDY</h1>
          <p className="text-xl text-gray-600">Real-time tracking for booking #{booking.id}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Live Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Mock Map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 opacity-50"></div>
                  <div className="text-center z-10">
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Map Coming Soon</h3>
                    <p className="text-gray-600 mb-4">Your buddy is currently {estimatedTime} minutes away</p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm">Your Location</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm">Buddy Location</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated elements */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Tracking Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-green-500 text-white"
                            : step.active
                              ? "bg-blue-500 text-white animate-pulse"
                              : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : step.active ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${step.active ? "text-blue-600" : "text-gray-900"}`}>
                          {step.step}
                        </h3>
                        <p className="text-sm text-gray-600">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Details */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{booking.service}</h3>
                  <Badge className={getStatusColor(booking.status)}>
                    <Clock className="h-3 w-3 mr-1" />
                    {booking.status.replace("-", " ").toUpperCase()}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Car className="h-4 w-4 mr-2 text-gray-600" />
                    <span>Vehicle: {booking.vehicle}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-600" />
                    <span>Location: {booking.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-600" />
                    <span>ETA: {estimatedTime} minutes</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="text-lg font-bold text-green-600">₹{booking.amount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Buddy Information */}
            <Card>
              <CardHeader>
                <CardTitle>Your EV Buddy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{booking.buddyName}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{booking.buddyRating} Rating</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <a href={`tel:${booking.buddyPhone}`} className="flex items-center justify-center w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Buddy
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <a
                      href={`https://wa.me/${booking.buddyPhone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Buddy Vehicle:</span>
                    <span className="font-medium">Service Van #EV123</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-red-900 mb-2">Emergency Help</h3>
                  <p className="text-sm text-red-700 mb-4">Need immediate assistance?</p>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <a href="tel:+918955588287" className="flex items-center justify-center w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency: +91 89555 88287
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
