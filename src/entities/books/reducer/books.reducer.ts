import { createReducer } from "@reduxjs/toolkit";
import { createBook, deleteBook, setBooks, updateBook } from "../actions/books.actions";
import { Books } from "../../../types/book";

const initialData:Books=[];
export const booksReducer=createReducer(initialData,(builder)=>{
    builder
    .addCase(setBooks,(state,action)=>action.payload)
    .addCase(createBook,(state,action)=>{
        state.push(action.payload);
        return state;
    })
    .addCase(deleteBook,(state,action)=>{
        state.splice(action.payload,1);
        return state;
    })
    .addCase(updateBook,(state,action)=>{
        if(action.payload.id!==undefined){
            state[action.payload.id]=action.payload.book;
            delete state[action.payload.id].id;
        }
        return state;
    })
})