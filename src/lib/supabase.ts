import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
)

export type Lead = {
  id?: string
  name: string
  email: string
  budget?: string
  message: string
  created_at?: string
}

export async function createLead(input: Omit<Lead, 'id'|'created_at'>) {
  const { data, error } = await supabase.from('leads').insert([input]).select().single()
  if (error) throw error
  return data
}
