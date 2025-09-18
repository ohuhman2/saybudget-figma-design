"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const MicIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>
)

const EditIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
)

const ChartIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const SettingsIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const HelpIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const LightbulbIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

export default function HomePage() {
  const [isListening, setIsListening] = useState(false)

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice recognition logic will be added here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="mx-auto max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div
          className="bg-blue-600 px-6 py-2 flex justify-between items-center text-sm font-medium"
          style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
        >
          <span style={{ color: "#ffffff" }}>9:41</span>
          <div className="flex items-center gap-1" style={{ color: "#ffffff" }}>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
            </div>
            <span className="ml-2" style={{ color: "#ffffff" }}>
              📶
            </span>
            <span className="ml-1" style={{ color: "#ffffff" }}>
              100%
            </span>
            <span className="ml-1" style={{ color: "#ffffff" }}>
              🔋
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Image
                  src="/images/saybudget-logo.png"
                  alt="Say Budget Logo"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">(Your Voice-Powered Money Tracker)</p>
          </div>

          <Card className="bg-gray-50 border-0 shadow-sm">
            <CardContent className="p-4 space-y-3">
              <div className="space-y-3 text-base">
                <div className="flex items-center gap-3 text-gray-700">
                  <HelpIcon />
                  <span className="font-medium">PHONE KEYBOARDS TOO SMALL?</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <HelpIcon />
                  <span className="font-medium">NUMBERS HARD TO SEE?</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <HelpIcon />
                  <span className="font-medium">BUTTONS TOO CONFUSING?</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <LightbulbIcon />
              <h2 className="text-xl font-bold text-blue-600">HERE'S THE SOLUTION:</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card
              className={`cursor-pointer transition-all duration-300 border-2 ${
                isListening
                  ? "border-green-500 bg-green-50 shadow-lg scale-105"
                  : "border-green-200 hover:border-green-400"
              }`}
              onClick={handleVoiceInput}
            >
              <CardContent className="p-4 text-center space-y-3">
                <div
                  className={`mx-auto w-12 h-12 rounded-xl flex items-center justify-center ${
                    isListening ? "bg-green-500 animate-pulse" : "bg-green-500"
                  }`}
                >
                  <MicIcon />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-800">Voice Input</h3>
                  <p className="text-sm text-gray-600 leading-tight">
                    Speak your
                    <br />
                    expenses
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Text Input */}
            <Card className="cursor-pointer transition-all duration-300 border-2 border-gray-200 hover:border-gray-400 hover:scale-105">
              <CardContent className="p-4 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
                  <EditIcon />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-800">Text Input</h3>
                  <p className="text-sm text-gray-600 leading-tight">Type precisely</p>
                </div>
              </CardContent>
            </Card>

            {/* View History */}
            <Card className="cursor-pointer transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 hover:scale-105">
              <CardContent className="p-4 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <ChartIcon />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-800">View History</h3>
                  <p className="text-sm text-gray-600 leading-tight">
                    See all
                    <br />
                    transactions
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="cursor-pointer transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 hover:scale-105">
              <CardContent className="p-4 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <SettingsIcon />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-800">Settings</h3>
                  <p className="text-sm text-gray-600 leading-tight">
                    Customize your
                    <br />
                    app
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-100 px-4 py-3 text-center">
          <p className="text-xs text-gray-500">fastidious-bublanina-dd5841.netlify.app</p>
          <div className="w-32 h-1 bg-gray-800 rounded-full mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  )
}
