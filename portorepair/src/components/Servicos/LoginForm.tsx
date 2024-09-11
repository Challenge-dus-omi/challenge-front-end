export default function FormLogin() {
    
  return (
    <div className="container-form-login" id="log">
      <form action="/em-breve.html">
        <fieldset>
          <legend>Login</legend>
          <div>
            <input
              type="text"
              name="txtEmail"
              id="idEmail"
              placeholder="Digite o seu e-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Por favor, insira um email válido. Exemplo: usuario@dominio.com"
            />
          </div>
          <div>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite a sua senha"
              required
              minLength={8}
              maxLength={20}
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}"
              title="A senha deve conter entre 8 e 20 caracteres, incluindo letras maiúsculas, minúsculas e números"
            />
          </div>
          <div id="enviar">
            <input type="submit" value="Entrar" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
