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
  Heart,
  Crown,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Shield,
  Clock,
  MapPin,
  Users,
  Award,
  Headphones,
  Wrench,
} from "lucide-react"
import { Chatbot } from "@/components/chatbot"

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

  const features = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Certified technicians with insurance coverage",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Average response time of 30-60 minutes",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Available across all major areas in Jaipur",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained professionals with EV expertise",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium service with satisfaction guarantee",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
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
      {/* Enhanced 3D Animated Background */}
      <div className="startup-3d-bg">
        {/* Floating EV Elements */}
        <div className="ev-element ev-car-1">
          <Car className="h-8 w-8 text-blue-500" />
        </div>
        <div className="ev-element ev-bike-1">
          <Zap className="h-6 w-6 text-green-500" />
        </div>
        <div className="ev-element ev-battery-1">
          <Battery className="h-7 w-7 text-purple-500" />
        </div>
        <div className="ev-element ev-charging-1">
          <Wrench className="h-6 w-6 text-orange-500" />
        </div>

        {/* Circuit Pattern Background */}
        <div className="circuit-pattern"></div>

        {/* Animated Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>

        {/* Energy Waves */}
        <div className="energy-wave wave-1"></div>
        <div className="energy-wave wave-2"></div>
        <div className="energy-wave wave-3"></div>

        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  EV BUDDY
                </span>
                <div className="text-xs text-gray-500">Your EV Companion</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Reviews
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Dashboard
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white hover:bg-gray-50 transition-all">
                <a href="/login">Login</a>
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all">
                <a href="/book">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Crown className="h-10 w-10 text-yellow-500 mr-4 animate-bounce" />
              <Badge className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-6 py-3 text-lg animate-pulse">
                🚀 India's Most Advanced EV Service Platform
              </Badge>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Your EV's Best{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-pulse">
                BUDDY
              </span>{" "}
              <br />
              <span className="text-4xl lg:text-5xl text-gray-600">in the Pink City</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              🔋 24/7 emergency charging • 🔧 Expert maintenance • 🏆 Premium care
              <br />
              <span className="text-lg text-purple-600 font-semibold">
                Experience the future of EV services with authentic Rajasthani hospitality
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 text-white px-10 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                <a href="/book" className="flex items-center">
                  <Zap className="h-6 w-6 mr-3 animate-pulse" />
                  Book Your Buddy Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm px-10 py-6 text-xl border-2 border-purple-300 hover:border-purple-500 transition-all"
              >
                <a href="tel:+918955588287" className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-red-500 animate-pulse" />
                  Emergency: +91 89555 88287
                </a>
              </Button>
            </div>

            {/* Enhanced Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stats.totalBookings}+</div>
                <div className="text-gray-600 font-medium">Total Bookings</div>
                <div className="text-xs text-green-500 mt-1">↗ +15% this month</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-green-600 mb-2">{stats.happyCustomers}+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
                <div className="text-xs text-green-500 mt-1">↗ +22% this month</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stats.buddiesActive}+</div>
                <div className="text-gray-600 font-medium">Active Buddies</div>
                <div className="text-xs text-green-500 mt-1">↗ +8% this month</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{stats.avgRating}★</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
                <div className="text-xs text-green-500 mt-1">↗ Excellent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 px-6 py-3 mb-6 text-lg">🚀 Why Choose EV BUDDY?</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Advanced Features for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Modern EVs
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-6 py-3 mb-6 text-lg">🔧 Our Premium Services</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Complete EV Care with{" "}
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Rajasthani Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${
                          service.color === "red"
                            ? "bg-gradient-to-br from-red-400 to-red-600"
                            : service.color === "blue"
                              ? "bg-gradient-to-br from-blue-400 to-blue-600"
                              : service.color === "green"
                                ? "bg-gradient-to-br from-green-400 to-green-600"
                                : "bg-gradient-to-br from-purple-400 to-purple-600"
                        }`}
                      >
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">{service.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                        <Badge variant="outline" className="text-sm">
                          {service.time}
                        </Badge>
                      </div>
                      <ul className="text-sm text-gray-500 space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all">
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
      <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-6 py-3 mb-6 text-lg">📱 Simple 3-Step Process</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EV BUDDY
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Getting help for your EV is as simple as 1-2-3. Experience the royal treatment with authentic Rajasthani
              hospitality and professional EV care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Book Your Buddy</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Call, WhatsApp, or use our app to book your EV buddy. Tell us your location and what you need - we'll
                handle the rest!
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <Truck className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Buddy On The Way</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Your certified EV buddy gets dispatched immediately. Track their live location and get real-time updates
                on arrival time.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Problem Solved!</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Your buddy arrives with all necessary equipment, solves your EV problem, and ensures you're back on the
                road safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-6 py-3 mb-6 text-lg">⭐ Customer Love Stories</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real stories from real customers who trust EV BUDDY for their electric vehicle needs across Jaipur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current" />
                      ))}
                    </div>
                    <span className="ml-3 text-lg text-gray-600">({testimonial.rating}.0)</span>
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                  <div className="border-t pt-6">
                    <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 mt-1">{testimonial.location}</div>
                    <div className="text-blue-600 font-semibold mt-1">{testimonial.vehicle}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Meet Your EV BUDDY?</h2>
          <p className="text-2xl text-blue-100 mb-12">
            Join thousands of satisfied customers who trust EV BUDDY for their electric vehicle needs in Jaipur.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <a href="/book" className="flex items-center">
                <Heart className="h-6 w-6 mr-3 text-red-500" />
                Book Your Buddy Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-xl font-bold bg-transparent shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <a
                href="https://wa.me/918955588287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  EV BUDDY
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-lg">Your EV's most trusted companion in the Pink City</p>
              <div className="flex space-x-4">
                <Badge className="bg-blue-600 px-4 py-2">24/7 Service</Badge>
                <Badge className="bg-green-600 px-4 py-2">Certified Buddies</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="/book" className="hover:text-white transition-colors">
                    Book Service
                  </a>
                </li>
                <li>
                  <a href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/track" className="hover:text-white transition-colors">
                    Track Booking
                  </a>
                </li>
                <li>
                  <a href="/become-buddy" className="hover:text-white transition-colors">
                    Become a Buddy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-xl">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Malviya Nagar</li>
                <li>Vaishali Nagar</li>
                <li>C-Scheme</li>
                <li>Mansarovar</li>
                <li>Jagatpura</li>
                <li>And 25+ more areas...</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; EV BUDDY 2025. All rights reserved. Made with ❤️ in Jaipur</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}
