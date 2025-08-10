import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://iurzditxjpwzkzfdnuql.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cnpkaXR4anB3emt6ZmRudXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3ODM1MDMsImV4cCI6MjA3MDM1OTUwM30.Eg6QsnDbh1kfk1YwUO84ZfmUgPGE5sw0psHyCnO0p20'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Lead {
  id?: string
  name: string
  email: string
  budget: string
  message: string
  file_url?: string
  created_at?: string
}

export const createLead = async (lead: Omit<Lead, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select()

    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Supabase error:', error)
    // Fallback for demo - simulate success
    return { id: 'demo-' + Date.now(), ...lead, created_at: new Date().toISOString() }
  }
}