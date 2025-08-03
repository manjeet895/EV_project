"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  User,
  Car,
  Battery,
  Bike,
  ArrowRight,
  Shield,
  CheckCircle,
  Star,
  Crown,
  Heart,
} from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 relative overflow-hidden">
      {/* EV-themed Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Electric Car Silhouettes */}
        <div className="absolute top-10 left-10 opacity-5">
          <Car className="h-40 w-40 text-blue-600 transform rotate-12 animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 opacity-5">
          <Bike className="h-32 w-32 text-green-600 transform -rotate-12 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-5">
          <Battery className="h-36 w-36 text-yellow-600 transform rotate-45 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <Zap className="h-44 w-44 text-purple-600 transform -rotate-6 animate-pulse" />
        </div>

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="circuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              d="M100,100 L200,100 L200,200 L400,200 L400,300 L600,300 L600,400 L800,400"
              stroke="url(#circuit)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M900,100 L800,100 L800,250 L600,250 L600,350 L400,350 L400,450 L200,450"
              stroke="url(#circuit)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        {/* Floating EV Elements */}
        <div className="floating-ev-elements">
          <div className="floating-element ev-1">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="floating-element ev-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <Battery className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="floating-element ev-3">
            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <Car className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <img src="/images/ev-buddy-logo.jpg" alt="EV BUDDY Logo" className="h-20 w-auto rounded-lg shadow-lg" />
            </div>

            {/* Hero Text */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Crown className="h-8 w-8 text-yellow-500 mr-3 animate-bounce" />
                <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 text-lg shadow-lg">
                  Rajasthan's #1 EV Service
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">
                  EV BUDDY
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of EV owners in Jaipur who trust us for 24/7 emergency charging, maintenance, and care
                with authentic Rajasthani hospitality! 🚗⚡
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24/7 Service</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified Buddies</div>
                  <div className="text-sm text-gray-600">Expert Technicians</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">4.8★ Rating</div>
                  <div className="text-sm text-gray-600">Customer Love</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">2500+ Bookings</div>
                  <div className="text-sm text-gray-600">Trusted Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                  <User className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {isLogin ? "Welcome Back!" : "Join EV BUDDY"}
                </CardTitle>
                <p className="text-gray-600">
                  {isLogin
                    ? "Sign in to access your EV buddy dashboard"
                    : "Create your account and get your first buddy"}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <div className="relative">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">or</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full h-12 bg-white border-2 border-gray-200 hover:bg-gray-50">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>

                  <Button variant="outline" className="w-full h-12 bg-white border-2 border-gray-200 hover:bg-gray-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Continue with Phone
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>

                {!isLogin && (
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      By creating an account, you agree to our{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full px-6 py-3 shadow-2xl animate-pulse">
          <Phone className="h-5 w-5 mr-2" />
          Emergency: +91 89555 88287
        </Button>
      </div>
    </div>
  )
}
