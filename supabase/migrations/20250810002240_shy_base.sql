/*
  # Create leads table for contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `budget` (text, not null)
      - `message` (text, not null)
      - `file_url` (text, optional)
      - `created_at` (timestamp, default now)
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for insert operations (public can insert leads)
    - Add policy for select operations (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  file_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (contact form submissions)
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admin) can read leads
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for performance
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);