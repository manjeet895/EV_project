"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Search, Crosshair, Car, Bike, Battery } from "lucide-react"

interface LocationPickerProps {
  onLocationSelect: (location: string) => void
}

export default function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const [currentLocation, setCurrentLocation] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("")
  const mapRef = useRef<HTMLDivElement>(null)

  // Popular locations in Jaipur
  const popularLocations = [
    "Malviya Nagar, Jaipur",
    "C-Scheme, Jaipur",
    "Vaishali Nagar, Jaipur",
    "Mansarovar, Jaipur",
    "Bani Park, Jaipur",
    "Jagatpura, Jaipur",
    "Tonk Road, Jaipur",
    "Ajmer Road, Jaipur",
  ]

  useEffect(() => {
    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // Reverse geocoding would happen here with Google Maps API
          setCurrentLocation(`Current Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`)
        },
        (error) => {
          console.error("Error getting location:", error)
          setCurrentLocation("Unable to get current location")
        },
      )
    }
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length > 2) {
      // Filter popular locations based on search
      const filtered = popularLocations.filter((location) => location.toLowerCase().includes(query.toLowerCase()))
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location)
    setSearchQuery(location)
    setSuggestions([])
    onLocationSelect(location)
  }

  const getCurrentLocation = () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const location = `Current Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`
          setCurrentLocation(location)
          handleLocationSelect(location)
          setIsLoading(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsLoading(false)
        },
      )
    }
  }

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search for location in Jaipur..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />

        {/* Current Location Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={getCurrentLocation}
          disabled={isLoading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          ) : (
            <Crosshair className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Search Suggestions */}
      {suggestions.length > 0 && (
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-0">
            <div className="max-h-48 overflow-y-auto">
              {suggestions.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(location)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center space-x-3"
                >
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-900">{location}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Current Location Display */}
      {currentLocation && (
        <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <Navigation className="h-5 w-5 text-blue-600" />
          <span className="text-sm text-blue-800">{currentLocation}</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleLocationSelect(currentLocation)}
            className="ml-auto bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            Use This
          </Button>
        </div>
      )}

      {/* Popular Locations */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Popular Locations
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {popularLocations.slice(0, 6).map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationSelect(location)}
              className="text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">{location.split(",")[0]}</div>
              <div className="text-xs text-gray-500">{location}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Location */}
      {selectedLocation && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-green-900">Selected Location</div>
                <div className="text-sm text-green-700">{selectedLocation}</div>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">✓ Selected</Badge>
          </div>
        </div>
      )}

      {/* Map Placeholder */}
      <Card className="bg-white shadow-lg border-0 overflow-hidden">
        <CardContent className="p-0">
          <div
            ref={mapRef}
            className="h-64 bg-gradient-to-br from-blue-100 to-green-100 relative flex items-center justify-center"
          >
            {/* EV-themed Map Background */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 opacity-20">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute top-8 right-8 opacity-20">
                <Bike className="h-6 w-6 text-green-600" />
              </div>
              <div className="absolute bottom-6 left-8 opacity-20">
                <Battery className="h-7 w-7 text-yellow-600" />
              </div>

              {/* Mock Map Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Content */}
            <div className="relative z-10 text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-500">
                {selectedLocation ? "Location selected" : "Select a location above"}
              </p>

              {/* Mock Location Markers */}
              {selectedLocation && (
                <>
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                </>
              )}
            </div>

            {/* Google Maps Integration Note */}
            <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-gray-600">
              Google Maps Integration Ready
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
