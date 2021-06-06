import Head from 'next/head'
import Link from 'next/link'
import { HeroSection } from '../components/HeroSection'
import styles from './home.module.scss'
import { RegisterForm } from '../components/RegisterForm'


export default function Home() {
  return (
    <>
      <Head>
        <title>Cadastro | Mais retorno</title>
      </Head>
      <main className={styles.contentContainer}>
        <HeroSection />
        <section className={styles.authContent}>
          <h1>Crie sua conta grátis</h1>
          <p>Sincronize suas transações na plataforma e acompanhe a performance da sua carteira diáriamente</p>
          
          <RegisterForm />

          <p className={styles.socialMessage}>Ou cadastre-se com sua rede social </p>
          <div className={styles.socialButtons}>
            <button>
              <span>GOOGLE</span>
              <img src="/assets/google.svg" alt="logo google" />
            </button>
            <button>
              <span>FACEBOOK</span>
              <img src="/assets/facebook.svg" alt="logo facebook" />
            </button>
          </div>
          <p className={styles.socialMessage}>
          Já possui cadastro? <Link href="#"><a>Faça o login</a></Link>  
          </p>
        </section>
      </main>
    </>
  )
}
