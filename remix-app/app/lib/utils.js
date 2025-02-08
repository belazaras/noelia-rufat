import { useLocation } from '@remix-run/react';

export function useIsHomePath() {
  const { pathname } = useLocation();
  return pathname === '/';
}
