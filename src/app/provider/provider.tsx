'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';

export function Providers({ children }: { children: React.ReactNode }) {
 if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
   return <div>Erro de configuração - contate o suporte</div>;
 }

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
    
      {children}
    </GoogleOAuthProvider>
  );
}
