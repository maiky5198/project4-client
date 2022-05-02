import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Home = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)
	// const {user, msgAlert} = props
	const navigate = useNavigate()

	const signup = () => {
		navigate('/sign-up')
	}
	const signin = () => {
		navigate('/sign-in')
	}
	
	return (
		<div style={{  
  			backgroundImage: "url('https://i.redd.it/5fvdkmet39j71.png')",
  			backgroundPosition: 'center',
			position: 'fixed',
			minHeight: '100%',
			minWidth: '100%',  
  			backgroundSize: 'cover',
  			backgroundRepeat: 'no-repeat',
			height: '750px',
			//   border: 'solid 3px black',
			
			}}>
			<h1 style={{
				textAlign: 'center',
				fontWeight: 'bold',
				color: '#0D0D0D',
				padding: '20px 0 5px 0'
			}}
			>Welcome to Exhibition</h1>
			<h3 style={{
				textAlign: 'center',
				color: '#0D0D0D',

			}}
			>Sign Up or Sign In to Examine Exhibitions</h3>
			<Container style={{
				display: 'flex',
				justifyContent: 'center',
					

			}}>
				<button onClick={signup} className= 'm-2' id='signup'>
					Sign up 
				</button>
				<button onClick={signin} className= 'm-2' id='signin'> 
					Sign in
				</button>
			</Container>
		</div>
	)
}

export default Home
