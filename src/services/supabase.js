import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zljskoldukfacquejluf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsanNrb2xkdWtmYWNxdWVqbHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2MzEyMTYsImV4cCI6MjAxMTIwNzIxNn0.RCKn2JbpNVtTvU9forOuqfayilwf7spbx_XSjKBvPyQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
