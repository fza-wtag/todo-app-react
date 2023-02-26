import { createClient } from "@supabase/supabase-js";

const projectURL = "https://aemdlybecnilhqobaiwn.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlbWRseWJlY25pbGhxb2JhaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyNjE0NDQsImV4cCI6MTk5MTgzNzQ0NH0.MawqvRVONrJWmOTjAmkSoBKLMPAl0dyiw2k2nUEt3IE";
let supabaseInstance = null;

class SupabaseSingleton {
  constructor() {
    if (!supabaseInstance) {
      supabaseInstance = createClient(projectURL, anonKey);
    }
    return supabaseInstance;
  }
}

const supabase = new SupabaseSingleton();

export default supabase;
