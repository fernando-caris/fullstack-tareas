import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

type Props = {}

function Login({}: Props) {

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/home')
  }

  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr className={styles.linea}/>
        <div className={styles.group}>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder='Ingrese Correo Electronico'/>
        </div>
        <div className={styles.group}> 
          <label htmlFor="">Contraseña:</label>
          <input type="text" placeholder='Ingrese Contraseña' />
        </div>
        <button>Inicia sesión</button>
      </form>
    </div>
    
  )
}

export default Login