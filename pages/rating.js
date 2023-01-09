import React, { useState } from 'react'
import { useRive, useStateMachineInput, UseRiveParameters } from '@rive-app/react-canvas'

const RIVE_ANIMATION = 'https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv'
const ARTBOARD_NAME = 'Avatar 1'
const STATE_MACHINE_NAME = 'avatar'
const THUMBS_UP_STATE = 'thumbsUp'
const THUMBS_DOWN_STATE = 'thumbsDown'
const RATINGS_DEFAULT_TEXT = 'How did we do?'

const Rating = () => {
	const [rateText, setRateText] = useState(RATINGS_DEFAULT_TEXT)

	const { rive, RiveComponent } = useRive({
		src: RIVE_ANIMATION,
		artboard: ARTBOARD_NAME,
		stateMachines: STATE_MACHINE_NAME,
		autoplay: true,
	})

	const positiveInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'isHappy')

	const negativeInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'isSad')

	const onButtonTrigger = stateMachine => {
		if (stateMachine === THUMBS_UP_STATE) {
			positiveInput.value = true
			negativeInput.value = false
			setRateText('Yeah! hoo..')
			setTimeout(() => {
				setRateText(RATINGS_DEFAULT_TEXT)
				positiveInput.value = false
			}, 2000)
		} else if (stateMachine === THUMBS_DOWN_STATE) {
			positiveInput.value = false
			negativeInput.value = true
			setRateText('Uh Oh..')
			setTimeout(() => {
				setRateText(RATINGS_DEFAULT_TEXT)
				negativeInput.value = false
			}, 2000)
		}
	}

	return (
		<div className='container'>
			<p>{rateText}</p>
			<div className='avatar-container'>
				<RiveComponent onMouseEnter={() => rive && rive.pause()} onMouseOut={() => rive && rive.play()} />
			</div>
			<div className='buttons'>
				<button onClick={() => onButtonTrigger(THUMBS_UP_STATE)} className='like'>
					Like
				</button>
				<button onClick={() => onButtonTrigger(THUMBS_DOWN_STATE)} className='dislike'>
					Dislike
				</button>
			</div>
		</div>
	)
}

export default Rating
