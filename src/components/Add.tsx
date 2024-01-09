import React, { useRef} from 'react';
import {useAppDispatch} from "../store/store";
import {addPerson} from "../store/features/personSlice";

const Add = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch()

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(addPerson({name: name.current}))

    }

    return(
        <form>
            <label htmlFor="">Person Name : </label>
            <input type="text"  onChange={(e) => (name.current = e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default Add;
