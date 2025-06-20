/*
  # Initial Schema Setup for theCenter App

  1. New Tables
    - `profiles`
      - User profiles with privacy settings
    - `goals`
      - SMART goals tracking
    - `diary_entries`
      - DBT diary card entries
    - `exposure_tasks`
      - ERP exposure hierarchy and tracking
    - `chat_messages`
      - Group chat messages
    - `files`
      - Uploaded files metadata

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  username text UNIQUE,
  display_name text,
  avatar_url text,
  privacy_settings jsonb DEFAULT '{"share_progress": false, "share_goals": false}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create goals table
CREATE TABLE IF NOT EXISTS goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  target_date date,
  status text DEFAULT 'in_progress',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD their own goals"
  ON goals
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Create diary_entries table
CREATE TABLE IF NOT EXISTS diary_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  date date DEFAULT CURRENT_DATE,
  mood_rating int CHECK (mood_rating BETWEEN 0 AND 10),
  skills_used text[],
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE diary_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD their own diary entries"
  ON diary_entries
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Create exposure_tasks table
CREATE TABLE IF NOT EXISTS exposure_tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  suds_rating int CHECK (suds_rating BETWEEN 0 AND 100),
  status text DEFAULT 'planned',
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE exposure_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD their own exposure tasks"
  ON exposure_tasks
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  message text NOT NULL,
  is_ai boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all chat messages"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create their own chat messages"
  ON chat_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create files table
CREATE TABLE IF NOT EXISTS files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  filename text NOT NULL,
  file_type text NOT NULL,
  file_size bigint NOT NULL,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD their own files"
  ON files
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);