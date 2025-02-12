import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rdkpcgkqpfyisdfxfpmf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJka3BjZ2txcGZ5aXNkZnhmcG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyODc4MTAsImV4cCI6MjA1NDg2MzgxMH0.lGlDkeaPsFkPzBRrzDx7Cpndhnx3ALoJmQ3dT1ySGZM";

export const supabase = createClient(supabaseUrl, supabaseKey);
