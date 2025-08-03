"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Zap,
  Car,
  Battery,
  MapPin,
  Clock,
  Star,
  Phone,
  Calendar,
  Settings,
  LogOut,
  Bell,
  CreditCard,
  History,
  User,
  Crown,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award,
  Heart,
  Bike,
  Truck,
} from "lucide-react"

export default function DashboardPage() {
  const [user] = useState({
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "+91 98765 43210",
    avatar: "/placeholder.svg?height=40&width=40",
    memberSince: "Jan 2024",
    totalBookings: 12,
    rating: 4.8,
    loyaltyPoints: 850,
  })

  const [stats, setStats] = useState({
    totalBookings: 0,
    completedServices: 0,
    savedMoney: 0,
    carbonSaved: 0,
  })

  const [recentBookings] = useState([
    {
      id: "BK001",
      service: "Emergency Buddy Rush",
      vehicle: "Ather 450X",
      date: "2024-01-15",
      time: "14:30",
      status: "completed",
      buddy: "Ramesh Singh",
      rating: 5,
      amount: "₹299",
      location: "Malviya Nagar",
    },
    {
      id: "BK002",
      service: "Scheduled Buddy Visit",
      vehicle: "Tata Nexon EV",
      date: "2024-01-12",
      time: "10:00",
      status: "completed",
      buddy: "Suresh Sharma",
      rating: 4,
      amount: "₹199",
      location: "C-Scheme",
    },
    {
      id: "BK003",
      service: "EV Health Check",
      vehicle: "Ather 450X",
      date: "2024-01-10",
      time: "16:45",
      status: "in-progress",
      buddy: "Mahesh Gupta",
      rating: null,
      amount: "₹499",
      location: "Vaishali Nagar",
    },
  ])

  const [upcomingBookings] = useState([
    {
      id: "BK004",
      service: "Battery Buddy Care",
      vehicle: "Ather 450X",
      date: "2024-01-18",
      time: "11:00",
      buddy: "Dinesh Jain",
      amount: "₹399",
      location: "Mansarovar",
    },
  ])

  useEffect(() => {
    // Animate stats
    const animateStats = () => {
      const targets = {
        totalBookings: 12,
        completedServices: 10,
        savedMoney: 2400,
        carbonSaved: 45,
      }

      Object.keys(targets).forEach((key) => {
        let current = 0
        const target = targets[key as keyof typeof targets]
        const increment = target / 30
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setStats((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }, 50)
      })
    }

    animateStats()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "in-progress":
        return <Clock className="h-4 w-4" />
      case "pending":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 relative overflow-hidden">
      {/* EV-themed Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Electric Vehicle Silhouettes */}
        <div className="absolute top-20 left-10 opacity-3">
          <Car className="h-32 w-32 text-blue-600 transform rotate-12 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-3">
          <Bike className="h-24 w-24 text-green-600 transform -rotate-12 animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-3">
          <Battery className="h-28 w-28 text-yellow-600 transform rotate-45 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-3">
          <Truck className="h-36 w-36 text-purple-600 transform -rotate-6 animate-pulse" />
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/images/ev-buddy-logo.jpg" alt="EV BUDDY Logo" className="h-12 w-auto rounded-lg" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                EV BUDDY
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-white">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge className="ml-2 bg-red-500 text-white">3</Badge>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Crown className="h-8 w-8 text-yellow-500" />
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name.split(" ")[0]}! 👋</h1>
              </div>
              <p className="text-gray-600">
                Your EV buddy dashboard - Track your bookings, manage services, and stay charged!
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
              <a href="/book" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Book New Service
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.totalBookings}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Services</p>
                  <p className="text-3xl font-bold text-green-600">{stats.completedServices}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Money Saved</p>
                  <p className="text-3xl font-bold text-purple-600">₹{stats.savedMoney}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Carbon Saved</p>
                  <p className="text-3xl font-bold text-green-600">{stats.carbonSaved}kg</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Battery className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Bookings */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Bookings</span>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Car className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{booking.service}</div>
                          <div className="text-sm text-gray-600">
                            {booking.vehicle} • {booking.location}
                          </div>
                          <div className="text-xs text-gray-500">
                            {booking.date} at {booking.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getStatusColor(booking.status)} mb-2`}>
                          {getStatusIcon(booking.status)}
                          <span className="ml-1 capitalize">{booking.status.replace("-", " ")}</span>
                        </Badge>
                        <div className="font-semibold text-gray-900">{booking.amount}</div>
                        {booking.rating && (
                          <div className="flex items-center text-yellow-500">
                            <Star className="h-3 w-3 fill-current" />
                            <span className="text-xs ml-1">{booking.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Bookings */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Battery className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{booking.service}</div>
                            <div className="text-sm text-gray-600">
                              {booking.vehicle} • {booking.location}
                            </div>
                            <div className="text-xs text-gray-500">
                              {booking.date} at {booking.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 mb-2">{booking.amount}</div>
                          <Button size="sm" variant="outline">
                            <Phone className="h-3 w-3 mr-1" />
                            Call Buddy
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No upcoming bookings</p>
                    <p className="text-sm text-gray-500 mb-4">Book your next EV service to keep your buddy ready!</p>
                    <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      <a href="/book">Book Now</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* User Profile Card */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-lg">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Rating</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-semibold">{user.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Loyalty Points</span>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-purple-500 mr-1" />
                      <span className="font-semibold">{user.loyaltyPoints}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Next Reward</span>
                      <span className="font-semibold">1000 points</span>
                    </div>
                    <Progress value={(user.loyaltyPoints / 1000) * 100} className="h-2" />
                    <p className="text-xs text-gray-500">{1000 - user.loyaltyPoints} points to next reward</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Zap className="h-4 w-4 mr-3" />
                  Emergency Charging
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="h-4 w-4 mr-3" />
                  Schedule Service
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MapPin className="h-4 w-4 mr-3" />
                  Track Buddy
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Phone className="h-4 w-4 mr-3" />
                  Call Support
                </Button>
              </CardContent>
            </Card>

            {/* Loyalty Program */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 text-purple-600 mr-2" />
                  EV BUDDY Premium
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-900">Upgrade to Premium</h3>
                  <p className="text-sm text-purple-700 mb-4">
                    Get priority service, exclusive discounts, and premium support
                  </p>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Upgrade Now
                  </Button>
                </div>
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
