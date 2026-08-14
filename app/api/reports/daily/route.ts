import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Temporary data — Phase 4 mein database se fetch karenge
    const report = {
      date: new Date().toISOString().split('T')[0],
      enrollments: 0,
      messages: 0,
      visitors: 0,
    }

    return NextResponse.json({
      success: true,
      report,
    }, { status: 200 })
  } catch (error) {
    console.error('Report error:', error)
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    )
  }
}
