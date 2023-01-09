import React from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

const STATE_MACHINE_NAME = 'StateAnimation'

const TheButton = () => {
	const { rive, RiveComponent } = useRive({
		src: '/assets/thebutton.riv',
		artboard: 'MainPage',
		stateMachines: STATE_MACHINE_NAME,
		autoplay: true,
	})

	return (
		<div className='thebutton_container'>
			<RiveComponent />
		</div>
	)
}

export default TheButton
