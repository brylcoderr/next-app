"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"

export default function AddGame() {
  const [formData, setFormData] = useState({
    gameUrl: "",
    imageUrl: "",
    gameName: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess("Game added successfully!")
        setFormData({ gameUrl: "", imageUrl: "", gameName: "" })
      } else {
        setError("Failed to add game")
      }
    } catch (err) {
      setError("An error occurred")
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">Add New Game</h3>
        <nav className="text-sm breadcrumbs">
          <ol className="flex gap-2">
            <li>Home</li>
            <li>→</li>
            <li>Manage Features</li>
            <li>→</li>
            <li>Games</li>
            <li>→</li>
            <li>Add New Game</li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Game</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert className="mb-4">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gameUrl">Game URL</Label>
                <Input
                  id="gameUrl"
                  value={formData.gameUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, gameUrl: e.target.value })
                  }
                  placeholder="Enter game URL"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Game Image URL</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  placeholder="Enter image URL"
                />
                <p className="text-sm text-gray-500">
                  Thumbnail link of the game, URL.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gameName">Game Name</Label>
                <Input
                  id="gameName"
                  value={formData.gameName}
                  onChange={(e) =>
                    setFormData({ ...formData, gameName: e.target.value })
                  }
                  placeholder="Enter game name"
                />
                <p className="text-sm text-gray-500">Set your game name.</p>
              </div>

              <Button type="submit">Add Game</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supported Sites</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h6 className="font-bold">MiniClip</h6>
                <p className="text-sm">
                  https://www.miniclip.com/games/8-ball-pool-multiplayer/en/
                </p>
              </div>
              <div>
                <h6 className="font-bold">Y8</h6>
                <p className="text-sm">
                  https://www.y8.com/games/penalty_shooters_2
                </p>
              </div>
              <div>
                <h6 className="font-bold">Free Online Games</h6>
                <p className="text-sm">
                  http://www.freeonlinegames.com/embed/125874
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
