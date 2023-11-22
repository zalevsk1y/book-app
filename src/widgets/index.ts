import { combineReducers } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/reducer/modal.reducer";

export const widgetsReducer=combineReducers({modal:modalReducer})