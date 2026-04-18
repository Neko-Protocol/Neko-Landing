import { useState, useCallback } from 'react';
import { submitWaitlist, isValidEmail } from './waitlistApi';

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'already' | 'error';
export type ErrorKind = 'invalid_email' | 'generic' | null;

export function useWaitlistForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorKind, setErrorKind] = useState<ErrorKind>(null);

  const submit = useCallback(async (email: string): Promise<boolean> => {
    if (!isValidEmail(email)) {
      setStatus('error');
      setErrorKind('invalid_email');
      return false;
    }

    setStatus('loading');
    setErrorKind(null);

    const result = await submitWaitlist(email);

    if (!result.ok) {
      setStatus('error');
      setErrorKind('generic');
      return false;
    }

    setStatus(result.already ? 'already' : 'success');
    return true;
  }, []);

  return {
    submit,
    status,
    errorKind,
    isLoading: status === 'loading',
    isSuccess: status === 'success' || status === 'already',
    isError: status === 'error',
  };
}
