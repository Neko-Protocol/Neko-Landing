type ClassValue = string | undefined | false | null | 0;

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ');
}
