import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET

    if (!secret) {
      return NextResponse.json(
        { error: 'SANITY_REVALIDATE_SECRET is not configured' },
        { status: 500 }
      )
    }

    const providedSecret = request.headers.get('x-sanity-webhook-secret')

    if (providedSecret !== secret) {
      return NextResponse.json(
        { error: 'Invalid webhook secret' },
        { status: 401 }
      )
    }

    revalidatePath('/', 'layout')

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Sanity revalidation error:', error)

    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    )
  }
}