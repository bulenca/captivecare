const Login = ({ onLogin }) => {
	return (
		<>
			<div className={'mainContainer'}>
				<div className={'titleContainer'}>
					<div>Zaloguj się</div>
				</div>
				<br />
				<div className={'inputContainer'}>
					<input placeholder='Wprowadź login' className={'inputBox'} />
				</div>
				<br />
				<div className={'inputContainer'}>
					<input type='password' placeholder='Wprowadź hasło' className={'inputBox'} />
				</div>
				<br />
				<div className={'inputContainer'}>
					<input className={'inputButton'} onClick={onLogin} type='button' value={'Log in'} />
				</div>
			</div>
		</>
	)
}

export default Login
