import React, {useState} from "react"
    /**
     * Challenge:
     * - create use state for shown
     * - create button that toggles between true and false
     * - Only display the punchline paragraph if 'isShown' is true
     */

const Joke = (props) => {

    const [ isShown, setIsShown ] = useState(false)

    const toggle = () => {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>See Punchline</button>
            <hr />
        </div>
    )
}

export default Joke


