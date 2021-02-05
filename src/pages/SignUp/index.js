import Logo from '../../assets/logo-white.png'
import Illustration from '../../assets/illustration.png'

const SignUp = () => {
    return (
      <div className='container-fluid h-100 background-primary'>
        <div className='col-12'>
          <img src={Logo}/>
        </div>
        <div className='row'>
          <div className='col-6 my-auto text-right'>
            <img src={Illustration} className='img-fluid'/>
          </div>
          <div className='col-6'>
            <div className='box col-8'>
              <h2 className='text-center'>Falta pouco para fazer o seu pet feliz.</h2>
              <br/>
              <input type='text' className='form-control form-control-lg mb-3' placeholder='Nome completo'/>
              <input type='text' className='form-control form-control-lg mb-3' placeholder='E-mail'/>
              <input type='text' className='form-control form-control-lg mb-3' placeholder='Telefone'/>
              <input type='text' className='form-control form-control-lg mb-3' placeholder='CPF'/>
              <input type='date' className='form-control form-control-lg mb-3' placeholder='Data de nascimento'/>
              <button className='btn btn-lg btn-block btn-secondary'>Finalizar Cadastro</button>
            </div>

          </div>
        </div>
      </div>
    )
}

export default SignUp
