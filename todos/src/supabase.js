import { createClient } from "@supabase/supabase-js";

const projectURL = "https://aemdlybecnilhqobaiwn.supabase.co";
const anonKey =
  process.env.REACT_APP_SUPABASE_API_KEY;
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
