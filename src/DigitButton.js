import { ACTIONS } from "./App"

// DigitButton component for rendering individual digit buttons
export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      // Dispatch the ADD_DIGIT action with the digit as payload when the button is clicked
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit} {/* Display the digit on the button */}
    </button>
  )
}
