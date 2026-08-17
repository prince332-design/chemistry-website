import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'

export async function GET() {
  try {
    const data = await sanityClient.fetch(`*[]`)

    return NextResponse.json({
      status: 'Sanity Connected',
      documents: data.length,
      data,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'Sanity Error',
        message: error?.message || String(error),
      },
      { status: 500 }
    )
  }
}