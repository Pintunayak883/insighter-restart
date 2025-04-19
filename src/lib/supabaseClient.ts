import { createClient } from "@supabase/supabase-js";

// Type inference ke liye env vars ko string hone ka bharosa dilate hain
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
