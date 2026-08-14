import { NextResponse } from 'next/server'
import { supabase } from '@/lib/db'

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0]

    // Real data from Supabase
    const [enrollments, messages, visitors] = await Promise.all([
      supabase.from('enrollments').select('*', { count: 'exact' }).gte('created_at', today),
      supabase.from('contacts').select('*', { count: 'exact' }).gte('created_at', today),
      supabase.from('visitors').select('*', { count: 'exact' }).gte('visited_at', today),
    ])

    return NextResponse.json({
      success: true,
      report: {
        date: today,
        enrollments: enrollments.count || 0,
        messages: messages.count || 0,
        visitors: visitors.count || 0,
      },
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    )
  }
}
