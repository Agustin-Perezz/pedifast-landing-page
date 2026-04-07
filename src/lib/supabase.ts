import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function submitLead(
  phoneNumber: string,
  source: string = 'landing_page'
) {
  if (!supabase) {
    console.warn('Supabase not configured');
    return { success: false, error: 'Supabase not configured' };
  }

  const { error } = await supabase.from('leads').insert({
    phone_number: phoneNumber,
    source
  });

  if (error) {
    console.error('Failed to submit lead:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
