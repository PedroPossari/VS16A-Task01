'use client';
import { useGoogleLogin } from '@/app/hooks/useGoogleLogin';
import styles from './loginGoogleButton.module.scss';
import { useEffect } from 'react';

export function LoginGoogleButton() {
  const { user, loading, error, login, logout, isAuthenticated } = useGoogleLogin();

  // Adicione logs para debug
  useEffect(() => {
    console.log('User state:', { user, loading, error, isAuthenticated });
  }, [user, loading, error, isAuthenticated]);

  if (loading) return <div className={styles.loadingState}>Carregando</div>;
  if (error) return <div className={styles.errorState}>Erro: {error}</div>;

  return (
    <div className={styles.container}>
      {isAuthenticated && user ? (
        <div className={styles.userLogged}>
          <div className={styles.userInfo}>
            {user.picture && (
              <img 
                src={user.picture} 
                alt={user.name || 'Usuário'} 
                className={styles.userImage}
                onError={(e) => {
                  // Fallback se a imagem não carregar
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/default-user.png';
                }}
              />
            )}
            <span className={styles.userName}>Olá, {user.name || 'Usuário'}</span>
          </div>
          <button 
            onClick={logout}
            className={styles.logoutButton}
          >
            Sair
          </button>
        </div>
      ) : (
        <button
          onClick={() => login()}
          className={styles.loginButtonOfficial}
          aria-label="Entrar com Google"
          disabled={loading}
        >
          <div className={styles.googleIcon} aria-hidden="true" />
          {loading ? 'Carregando...' : 'Entrar com Google'}
        </button>
      )}
    </div>
  );
}