import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect } from 'react'

import {FiUser, FiAtSign, FiLock} from 'react-icons/fi'
import styles from './styles.module.scss'

import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../contexts/AuthContext'

type SignUpFormData = {
    first_name:string
    last_name:string
    email:string
    password:string
}

const signUpFormSchema = yup.object().shape({
    first_name:yup.string().required("O campo NOME é obrigatório"),
    last_name:yup.string().required("O campo SOBRENOME é obrigatório"),
    email: yup.string().required("O campo EMAIL é obrigatório").email("O campo EMAIL está inválido"),
    password:yup.string()
        .required("O campo senha é obrigatório")
        .min(8, "A senha deve conter no mínimo 8 caractéres")
        
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"A senha deve conter ao menos uma letra e um número")
        
})

export function RegisterForm(){
    const {handleFirstName} = useAuth()
    const router = useRouter()
    const {register, handleSubmit,formState} = useForm({
        resolver: yupResolver(signUpFormSchema)
    })

    const {errors} = formState
    
    useEffect(()=>{
        for (const error in errors) {
            toast(errors[error].message);
        }
    },[errors])

    const handleSignUp:SubmitHandler<SignUpFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve,2000))
        handleFirstName(values.first_name)
        router.push('/welcome')
    }

    return(
        <>
        <form onSubmit={handleSubmit(handleSignUp)} className={styles.registerForm}>
            <label htmlFor="first_name" className={!!errors.first_name ? styles.isInvalid : 'false'}>
                <FiUser />
                <input id="first_name" type="text" placeholder="NOME" {...register("first_name")}/>
            </label>
            <label htmlFor="last_name" className={!!errors.last_name ? styles.isInvalid : 'false'}>
                <FiUser />
                <input id="last_name" type="text" placeholder="SOBRENOME" {...register("last_name")}/>
            </label>
            <label htmlFor="email" className={!!errors.email ? styles.isInvalid : 'false'}>
                <FiAtSign />
                <input id="email" type="text" placeholder="EMAIL" {...register("email")}/>
            </label>
            <label htmlFor="password" className={!!errors.password ? styles.isInvalid : 'false'}>
                <FiLock />
                <input id="password" type="password" placeholder="SENHA" {...register("password")}/>
            </label>

            <p>
                Ao cadastrar, você concorda com os
                <Link href="#">
                <a> Termos de Serviço e Política de Privacidade da Mais Retorno.</a>
                </Link>
            </p>

            <button className={styles.buttonRegister}>
                {formState.isSubmitting ? (
                    <span>
                        AGUARDE...
                    </span>
                ):(
                    <span>
                        CRIAR CONTA
                    </span>
                )} 
            </button>
            <Link href="#">
                <a className={styles.buttonBack}>
                Voltar
                </a>
            </Link>
        </form>
        <ToastContainer />
        </>
    )
}