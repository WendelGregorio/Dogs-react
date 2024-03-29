import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { PASSWORD_RESET } from '../../api/api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()
  const password = useForm()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubtmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })

      const response = await request(url, options)
      if (response.ok) navigate('/Dogs-react/login')
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubtmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
