import { createClient } from "@supabase/supabase-js";

// Zentrale Verbindung zu unserer Supabase-Datenbank.
// Die Zugangsdaten kommen aus der Datei .env.local (im Projekt-Hauptordner).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Dieses "supabase"-Objekt nutzen wir überall, um Daten zu speichern oder zu lesen.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
