import { createAction } from '@reduxjs/toolkit';
import { ModalState } from '../../../types/state';

export const OPEN_MODAL = 'widgets/modal:open';
export const CLOSE_MODAL = 'widgets/modal:close';
export const SET_ID = 'widgets/modal/id:set';
export const SET_INIT_VALUES = 'widgets/modal/initValues:set';
export const SET_MODAL_ACTION = 'widgets/modal/action:set';


export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const setId = createAction<ModalState['id']>(SET_ID);
export const setInitValues = createAction<ModalState['initValues']>(SET_INIT_VALUES);
export const setModalAction = createAction<ModalState['action']>(SET_MODAL_ACTION);

