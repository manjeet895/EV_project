"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LocationPicker from "@/components/location-picker"
import {
  Phone,
  User,
  Car,
  Battery,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  CreditCard,
  ArrowRight,
  Bike,
  Truck,
  Crown,
} from "lucide-react"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [location, setLocation] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleModel: "",
    description: "",
    preferredTime: "",
    urgency: "normal",
  })

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

  const vehicleTypes = [
    {
      id: "car",
      name: "Electric Car",
      icon: Car,
      models: ["Tata Nexon EV", "MG ZS EV", "Hyundai Kona", "Mahindra eVerito"],
    },
    {
      id: "bike",
      name: "Electric Bike",
      icon: Bike,
      models: ["Ather 450X", "TVS iQube", "Bajaj Chetak", "Hero Electric"],
    },
    {
      id: "scooter",
      name: "Electric Scooter",
      icon: Bike,
      models: ["Ola S1", "Simple One", "Ampere Magnus", "Hero Vida"],
    },
    {
      id: "commercial",
      name: "Commercial Vehicle",
      icon: Truck,
      models: ["Mahindra Treo", "Piaggio Ape E-City", "Tata Ace EV"],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle booking submission
    console.log("Booking submitted:", {
      service: selectedService,
      vehicle: selectedVehicle,
      location,
      ...formData,
    })
    // Redirect to confirmation page
    window.location.href = "/booking-confirmation"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 relative overflow-hidden">
      {/* EV-themed Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Electric Vehicle Silhouettes */}
        <div className="absolute top-20 left-10 opacity-5">
          <Car className="h-32 w-32 text-blue-600 transform rotate-12 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-5">
          <Bike className="h-24 w-24 text-green-600 transform -rotate-12 animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-5">
          <Battery className="h-28 w-28 text-yellow-600 transform rotate-45 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-5">
          <Truck className="h-36 w-36 text-purple-600 transform -rotate-6 animate-pulse" />
        </div>

        {/* Floating EV Elements */}
        <div className="booking-3d-bg">
          <div className="booking-element booking-1"></div>
          <div className="booking-element booking-2"></div>
          <div className="booking-element booking-3"></div>
          <div className="booking-element booking-4"></div>
          <div className="progress-ring progress-1"></div>
          <div className="progress-ring progress-2"></div>
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
              <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2">
                <Crown className="h-4 w-4 mr-2" />
                Book Your Buddy
              </Badge>
              <Button variant="outline" className="bg-white">
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="h-6 w-6" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-20 h-1 mx-2 ${
                      step > stepNumber ? "bg-gradient-to-r from-blue-500 to-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Vehicle</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {step === 1 && "Choose Your Service"}
              {step === 2 && "Select Your Vehicle"}
              {step === 3 && "Booking Details"}
              {step === 4 && "Confirm Booking"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                  {services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <div key={service.id} className="relative">
                        <RadioGroupItem value={service.id} id={service.id} className="peer sr-only" />
                        <Label
                          htmlFor={service.id}
                          className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all"
                        >
                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              service.color === "red"
                                ? "bg-red-100"
                                : service.color === "blue"
                                  ? "bg-blue-100"
                                  : service.color === "green"
                                    ? "bg-green-100"
                                    : "bg-purple-100"
                            }`}
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
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-lg">{service.name}</h3>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                                <Badge variant="outline" className="text-xs">
                                  {service.time}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-3">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Vehicle Selection */}
            {step === 2 && (
              <div className="space-y-4">
                <RadioGroup value={selectedVehicle} onValueChange={setSelectedVehicle}>
                  {vehicleTypes.map((vehicle) => {
                    const IconComponent = vehicle.icon
                    return (
                      <div key={vehicle.id} className="relative">
                        <RadioGroupItem value={vehicle.id} id={vehicle.id} className="peer sr-only" />
                        <Label
                          htmlFor={vehicle.id}
                          className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all"
                        >
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">{vehicle.name}</h3>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.models.map((model, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {model}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Booking Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleModel">Vehicle Model</Label>
                  <Select
                    value={formData.vehicleModel}
                    onValueChange={(value) => setFormData({ ...formData, vehicleModel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your vehicle model" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleTypes
                        .find((v) => v.id === selectedVehicle)
                        ?.models.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <LocationPicker onLocationSelect={setLocation} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="preferredTime"
                      name="preferredTime"
                      type="datetime-local"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Any specific requirements or issues with your vehicle..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-semibold">{services.find((s) => s.id === selectedService)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vehicle:</span>
                      <span className="font-semibold">{vehicleTypes.find((v) => v.id === selectedVehicle)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Model:</span>
                      <span className="font-semibold">{formData.vehicleModel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-semibold">{location || "Current Location"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-semibold">{formData.preferredTime || "ASAP"}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">{services.find((s) => s.id === selectedService)?.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Important Notes:</h4>
                      <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                        <li>• Your buddy will call you before arriving</li>
                        <li>• Payment can be made after service completion</li>
                        <li>• Service includes 30-day warranty</li>
                        <li>• Emergency services available 24/7</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={step === 1} className="bg-white">
                Previous
              </Button>

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && !selectedVehicle) ||
                    (step === 3 && (!formData.name || !formData.phone))
                  }
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
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
