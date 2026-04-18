import { supabase } from '@/lib/supabase';

const DUPLICATE_KEY_CODE = '23505';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return value.length > 0 && EMAIL_REGEX.test(value);
}

export type WaitlistResult =
  | { ok: true; already: boolean }
  | { ok: false };

export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  if (!supabase) return { ok: false };

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: email.toLowerCase() });

  if (error) {
    if (error.code === DUPLICATE_KEY_CODE) {
      return { ok: true, already: true };
    }
    return { ok: false };
  }

  return { ok: true, already: false };
}
