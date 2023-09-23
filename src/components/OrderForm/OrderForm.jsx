import { useState } from 'react'
import style from './style.module.css'

const OrderForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        if (name.trim() === '') {
            setNameError('Por favor, ingresa tu nombre.')
            return
        } else {
            setNameError('')
        }

        if (phone.trim() === '') {
            setPhoneError('Por favor, ingresa tu número de teléfono.')
            return
        } else {
            setPhoneError('')
        }

        if (email.trim() === '') {
            setEmailError('Por favor, ingresa tu correo electrónico.')
            return
        } else {
            setEmailError('')
        }

        const userData = {
            name,
            phone,
            email,
        }

        onConfirm(userData)
    }

    return (
        <div className={style['order-form']}>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        placeholder={nameError || 'Nombre'}
                    />
                </label>
                <label>
                    Teléfono
                    <input
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        placeholder={phoneError || 'Teléfono'}
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        placeholder={emailError || 'Email'}
                    />
                </label>
                <div>
                    <button type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm