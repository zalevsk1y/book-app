import { Books } from "../config/books"

export type ModalState={
    isOpen:boolean,
    action:'edit'|'create'|undefined,
    id:number|undefined,
    initValues:Book|undefined
}
export type State={
    books:Books;
    widgets:{
        modal:ModalState
    }
}