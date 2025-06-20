export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          display_name: string | null
          avatar_url: string | null
          privacy_settings: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          display_name?: string | null
          avatar_url?: string | null
          privacy_settings?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          display_name?: string | null
          avatar_url?: string | null
          privacy_settings?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      goals: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          target_date: string | null
          status: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          target_date?: string | null
          status?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          target_date?: string | null
          status?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      diary_entries: {
        Row: {
          id: string
          user_id: string
          date: string
          mood_rating: number | null
          skills_used: string[] | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          date?: string
          mood_rating?: number | null
          skills_used?: string[] | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          mood_rating?: number | null
          skills_used?: string[] | null
          notes?: string | null
          created_at?: string
        }
      }
      exposure_tasks: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          suds_rating: number | null
          status: string | null
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          suds_rating?: number | null
          status?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          suds_rating?: number | null
          status?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      chat_messages: {
        Row: {
          id: string
          user_id: string
          message: string
          is_ai: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          message: string
          is_ai?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          message?: string
          is_ai?: boolean | null
          created_at?: string
        }
      }
      files: {
        Row: {
          id: string
          user_id: string
          filename: string
          file_type: string
          file_size: number
          storage_path: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          filename: string
          file_type: string
          file_size: number
          storage_path: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          filename?: string
          file_type?: string
          file_size?: number
          storage_path?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}