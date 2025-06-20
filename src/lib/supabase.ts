import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Get environment variables with fallbacks to prevent runtime errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a dummy client if credentials are missing
const isValidConfig = supabaseUrl && supabaseAnonKey && 
  !supabaseUrl.includes('your_supabase_url_here') && 
  !supabaseAnonKey.includes('your_supabase_anon_key_here');

export const supabase = isValidConfig 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => isValidConfig;