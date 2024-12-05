import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcWJqZ256ZmxmaGx5cWxzbm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODc2MDEsImV4cCI6MjA0ODM2MzYwMX0.n5ESy7Bs2e9_S7aP9Bs4xFfG2hM9GkFtwva7dKV-whw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
