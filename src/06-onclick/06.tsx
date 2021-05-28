import {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
        //alert('user should be deleted')
    }

    const saveUser = () => {
        alert('user should be saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        return event.currentTarget.value
    }

    const onFocusLost = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={onFocusLost}>Dimych</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name='delete' onClick={deleteUser}>x</button>
            <button name='save' onClick={deleteUser}>x</button>
        </div>
    )
}