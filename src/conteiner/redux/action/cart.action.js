import { ADDTOCART, DECREMENT_QTY, DELETE_QTY, INCREMENT_QTY } from "../ActionType"


export const addToCart = (id) => (dispatch) => {
    dispatch({ type: ADDTOCART, payload: { id, qty: 1 } })
}

export const incrementCart = (id) => (dispatch) => {
    dispatch({ type: INCREMENT_QTY, payload: id })
}

export const decrementCart = (id) => (dispatch) => {
    dispatch({ type: DECREMENT_QTY, payload: id })
}

export const deleteCart = (id) => (dispatch) => {
    dispatch({ type: DELETE_QTY, payload: id })
}