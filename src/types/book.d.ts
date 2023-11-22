export type Book = {
    name: string,
    price: number,
    category: string,
    description: string,
    id?:number
  }
  
  export type Books= Array<Book>