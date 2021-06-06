import { HeroSection } from "../../components/HeroSection";
import { useAuth } from "../../contexts/AuthContext";
import styles from './styles.module.scss'


export default function Welcome(){
    const {firstName} = useAuth()
    return(
        <>
            <main className={styles.contentContainer}>
                <HeroSection />

                <section className={styles.welcomeContent}>
                    <div>
                        <h1>Conta criada com sucesso!</h1>
                        <p>Seja bem vindo <strong>{firstName}</strong>. Aqui você encontrará tudo que precisa para investir melhor. </p> 
                    </div>
                    

                    <button className={styles.accessButton}>
                        ACESSAR CONTA
                    </button>
                </section>
            </main>
        </>
    )
}