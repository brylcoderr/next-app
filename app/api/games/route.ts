import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Game from "@/models/Game"

export async function POST(request: Request) {
  try {
    await connectDB()
    const body = await request.json()
    
    const { gameUrl, imageUrl, gameName } = body
    
    if (!gameUrl) {
      return NextResponse.json(
        { error: "Please add a game URL" },
        { status: 400 }
      )
    }

    const game = await Game.create({
      gameUrl,
      imageUrl,
      gameName,
      createdAt: new Date(),
    })

    return NextResponse.json(game, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating game" },
      { status: 500 }
    )
  }
}
