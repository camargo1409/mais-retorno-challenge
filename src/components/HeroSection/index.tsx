import styles from './styles.module.scss'

export function HeroSection(){
    return(
        <section className={styles.hero}>
          <img 
            src="/assets/logo.svg"
            alt="logo"
          />
          <img src="/assets/setas.svg" alt="setas" />
          <p>
            Tudo o que você precisa para investir melhor em um só lugar.
          </p>
        </section>
    )
}