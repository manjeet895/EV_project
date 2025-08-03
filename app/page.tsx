"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Phone,
  MessageCircle,
  Star,
  Battery,
  Car,
  Truck,
  Play,
  Heart,
  Crown,
  CheckCircle,
  AlertTriangle,
  Calendar,
} from "lucide-react"

export default function HomePage() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    happyCustomers: 0,
    buddiesActive: 0,
    avgRating: 0,
  })

  useEffect(() => {
    // Animate stats on load
    const animateStats = () => {
      const targets = {
        totalBookings: 2500,
        happyCustomers: 1800,
        buddiesActive: 45,
        avgRating: 4.8,
      }

      Object.keys(targets).forEach((key) => {
        let current = 0
        const target = targets[key as keyof typeof targets]
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setStats((prev) => ({ ...prev, [key]: Math.floor(current * 10) / 10 }))
        }, 30)
      })
    }

    animateStats()
  }, [])

  const services = [
    {
      id: "emergency",
      name: "Emergency Buddy Rush",
      price: "₹299",
      time: "30-60 min",
      icon: AlertTriangle,
      color: "red",
      description: "Urgent charging when you're stranded",
      features: ["24/7 Available", "GPS Tracking", "Emergency Support"],
    },
    {
      id: "scheduled",
      name: "Scheduled Buddy Visit",
      price: "₹199",
      time: "At your time",
      icon: Calendar,
      color: "blue",
      description: "Regular charging at home/office",
      features: ["Advance Booking", "Regular Slots", "Flexible Timing"],
    },
    {
      id: "maintenance",
      name: "EV Health Check",
      price: "₹499",
      time: "45-90 min",
      icon: Car,
      color: "green",
      description: "Complete EV inspection & care",
      features: ["Full Diagnosis", "Health Report", "Maintenance Tips"],
    },
    {
      id: "battery",
      name: "Battery Buddy Care",
      price: "₹399",
      time: "30-45 min",
      icon: Battery,
      color: "purple",
      description: "Battery diagnostics & health report",
      features: ["Battery Analysis", "Performance Check", "Life Extension Tips"],
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Malviya Nagar",
      rating: 5,
      comment:
        "EV BUDDY saved my day! My Ather was dead near City Palace, and they reached in 45 minutes. Excellent service!",
      vehicle: "Ather 450X",
    },
    {
      name: "Priya Sharma",
      location: "Vaishali Nagar",
      rating: 5,
      comment: "Regular scheduled visits for my Nexon EV. Very professional and reliable. Highly recommended!",
      vehicle: "Tata Nexon EV",
    },
    {
      name: "Amit Singh",
      location: "C-Scheme",
      rating: 4,
      comment: "Great service for commercial vehicles. They handle our fleet maintenance perfectly.",
      vehicle: "Mahindra eVerito",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="hero-3d-bg">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
        <div className="pulse-ring ring-1"></div>
        <div className="pulse-ring ring-2"></div>
        <div className="pulse-ring ring-3"></div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EV BUDDY
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
                Reviews
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                Dashboard
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white">
                <a href="/login">Login</a>
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                <a href="/book">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Crown className="h-8 w-8 text-yellow-500 mr-3" />
              <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2">
                Rajasthan's #1 EV Service
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Your EV's Best{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">BUDDY</span>{" "}
              in Jaipur
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              24/7 emergency charging, maintenance, and care for your electric vehicle with authentic Rajasthani
              hospitality. Your trusted companion on every journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 text-lg"
              >
                <a href="/book" className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Book Your Buddy Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white px-8 py-4 text-lg">
                <a href="tel:+918955588287" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: +91 89555 88287
                </a>
              </Button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.totalBookings}+</div>
                <div className="text-gray-600">Total Bookings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{stats.happyCustomers}+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{stats.buddiesActive}+</div>
                <div className="text-gray-600">Active Buddies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">{stats.avgRating}★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Our Buddy Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete EV Care with{" "}
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Rajasthani Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency charging to regular maintenance, your EV buddy provides comprehensive care with the warmth
              and reliability of Rajasthani hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          service.color === "red"
                            ? "bg-red-100 group-hover:bg-red-200"
                            : service.color === "blue"
                              ? "bg-blue-100 group-hover:bg-blue-200"
                              : service.color === "green"
                                ? "bg-green-100 group-hover:bg-green-200"
                                : "bg-purple-100 group-hover:bg-purple-200"
                        } transition-colors`}
                      >
                        <IconComponent
                          className={`h-8 w-8 ${
                            service.color === "red"
                              ? "text-red-600"
                              : service.color === "blue"
                                ? "text-blue-600"
                                : service.color === "green"
                                  ? "text-green-600"
                                  : "text-purple-600"
                          }`}
                        />
                      </div>
                      <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                        <Badge variant="outline" className="text-xs">
                          {service.time}
                        </Badge>
                      </div>
                      <ul className="text-xs text-gray-500 space-y-1 mb-4">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                        <a href="/book">Book Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-16 bg-gray-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Simple Process</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EV BUDDY
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting help for your EV is as simple as 1-2-3. Experience the royal treatment with authentic Rajasthani
              hospitality and professional EV care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Buddy</h3>
              <p className="text-gray-600 leading-relaxed">
                Call, WhatsApp, or use our app to book your EV buddy. Tell us your location and what you need - we'll
                handle the rest!
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buddy On The Way</h3>
              <p className="text-gray-600 leading-relaxed">
                Your certified EV buddy gets dispatched immediately. Track their live location and get real-time updates
                on arrival time.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem Solved!</h3>
              <p className="text-gray-600 leading-relaxed">
                Your buddy arrives with all necessary equipment, solves your EV problem, and ensures you're back on the
                road safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-16 bg-gray-50 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See EV BUDDY in Action</h2>
          <p className="text-gray-600 mb-8">
            Watch how our buddies provide professional EV care with authentic Rajasthani hospitality.
          </p>

          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-blue-500 to-green-500 h-64 flex items-center justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8">
                  <Play className="h-6 w-6 mr-2" />
                  Watch Demo Video
                </Button>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm">
                  Coming Soon
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 mb-4">Customer Love</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real customers who trust EV BUDDY for their electric vehicle needs across Jaipur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                    <div className="text-sm text-blue-600">{testimonial.vehicle}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-green-600 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Meet Your EV BUDDY?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust EV BUDDY for their electric vehicle needs in Jaipur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <a href="/book" className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Book Your Buddy Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <a
                href="https://wa.me/918955588287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  EV BUDDY
                </span>
              </div>
              <p className="text-gray-400 mb-4">Your EV's most trusted companion in the Pink City</p>
              <div className="flex space-x-4">
                <Badge className="bg-blue-600">24/7 Service</Badge>
                <Badge className="bg-green-600">Certified Buddies</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/book" className="hover:text-white">
                    Book Service
                  </a>
                </li>
                <li>
                  <a href="/dashboard" className="hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/track" className="hover:text-white">
                    Track Booking
                  </a>
                </li>
                <li>
                  <a href="/become-buddy" className="hover:text-white">
                    Become a Buddy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Malviya Nagar</li>
                <li>Vaishali Nagar</li>
                <li>C-Scheme</li>
                <li>Mansarovar</li>
                <li>And more...</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; EV BUDDY 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
