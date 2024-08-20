import { ACTIONS } from "./App"

// OperationButton component for rendering individual operation buttons
export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      // Dispatch the CHOOSE_OPERATION action with the operation as payload when the button is clicked
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation} {/* Display the operation symbol on the button */}
    </button>
  )
}
