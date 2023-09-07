// supabase.js
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const NEXT_PUBLIC_SUPABASE_URL = "https://alrqqwrppskxwfzwjusx.supabase.co";

const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscnFxd3JwcHNreHdmendqdXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NTIzMzIsImV4cCI6MjAwNzQyODMzMn0.M_DAveiKe3I-fOxQZXTnyFGfC73dhzH2CG6S3VLDK8o";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;
