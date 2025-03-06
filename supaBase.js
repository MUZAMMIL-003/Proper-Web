import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Your Supabase project details
// const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_URL = "https://iyotjghakberaewcyazn.supabase.co";

// const SUPABASE_ANON_KEY = "your-anon-key";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5b3RqZ2hha2JlcmFld2N5YXpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyOTEwNzcsImV4cCI6MjA1Njg2NzA3N30.jO4RYmdboEwSJ5RAAAuewSvI2MVaYoSGxKbqf6jCnQg";

// Initialize Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

