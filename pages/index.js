import { useRive } from '@rive-app/react-canvas'
import Link from 'next/link'

const Home = () => {
	const { rive, RiveComponent } = useRive({
		src: 'https://cdn.rive.app/animations/vehicles.riv',
		autoplay: false,
	})
	return (
		<>
			<div
				className='card'
				onMouseEnter={() => rive && rive.play()}
				onMouseLeave={() => rive && rive.pause()}
			>
				<RiveComponent className='rive' />
				<div className='contents'>
					<h1>Rive Animations</h1>
					<p>
						<Link href='/rating'>Rating</Link>
						<Link href='/button'>TheButton</Link>
						<Link href='/login'>LogIn</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default Home
