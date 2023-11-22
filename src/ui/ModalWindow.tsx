import React, { FormEventHandler } from "react"

export type ModalWindowProps = {
    title: string,
    onSubmit: FormEventHandler,
    onAbort: () => void,
    isOpen: boolean,
    children: React.ReactNode
}

/**
 * Represents a modal window component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the modal window.
 * @param {Function} props.onSubmit - The event handler for the form submission event.
 * @param {Function} props.onAbort - The event handler for the cancel button click event.
 * @param {boolean} props.isOpen - Indicates whether the modal window is open.
 * @param {React.ReactNode} props.children - The content to be rendered inside the modal window.
 * @returns {JSX.Element} The rendered modal window component.
 */


export const ModalWindow: React.FC<ModalWindowProps> = ({ title, onSubmit, children, onAbort, isOpen }) => {

    return (
        <div className={`relative z-10 ${!isOpen && 'hidden'}`} aria-hidden={!isOpen} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div>

                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900 mb-2" id="modal-title">{title}</h3>
                                    <hr />
                                    <div className="mt-2">
                                        <form id="books-form" role="form" action="#" onSubmit={onSubmit}>
                                            {children}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit" form="books-form" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" >Accept</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onAbort}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}