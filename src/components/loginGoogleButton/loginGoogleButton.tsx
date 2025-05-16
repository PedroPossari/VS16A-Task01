'use client';
import { useGoogleLogin } from '@/app/hooks/useGoogleLogin';
import styles from './loginGoogleButton.module.scss';

export function LoginGoogleButton() {
  const { user, loading, error, login, logout, isAuthenticated } = useGoogleLogin();

  if (loading) return <div className={styles.loadingState}>Carregando</div>;
  if (error) return <div className={styles.errorState}>Erro: {error}</div>;

  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <div className={styles.userLogged}>
          <div className={styles.userInfo}>
            <img 
              src={user?.picture} 
              alt={user?.name || 'Usuário'} 
              className={styles.userImage}
            />
            <span className={styles.userName}>Olá, {user?.name}</span>
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
        >
          <div className={styles.googleIcon} aria-hidden="true" />
          Entrar com Google
        </button>
      )}
    </div>
  );
}