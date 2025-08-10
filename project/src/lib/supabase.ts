import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key'

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
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()

  if (error) throw error
  return data[0]
}