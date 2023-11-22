import { createReducer } from "@reduxjs/toolkit";
import { ModalState } from "../../../types/state";
import { closeModal, openModal, setId, setInitValues, setModalAction } from "../actions/modal.actions";


export const initState: ModalState = {
    isOpen: false,
    action: undefined,
    id: undefined,
    initValues: undefined
}
export const modalReducer = createReducer(initState, (builder) => {
    builder
        .addCase(openModal, (state) => {
            state.isOpen = true;
            return state;
        })
        .addCase(closeModal, (state) => {
            return {
                isOpen: false,
                action: undefined,
                id: undefined,
                initValues: undefined
            };
        })
        .addCase(setId, (state, action) => {
            state.id = action.payload
            return state;
        })
        .addCase(setInitValues, (state, action) => {
            state.initValues = action.payload;
            return state;
        })
        .addCase(setModalAction, (state, action) => {
            state.action=action.payload;
            return state;
        })
})