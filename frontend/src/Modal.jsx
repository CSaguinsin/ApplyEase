import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <>
            <div

                className="fixed top-0 left-0 flex w-screen h-screen items-center justify-center"
            >
                <div
                    className="bg-white flex h-64 w-96 p-6 rounded shadow-lg border items-center justify-center"
                >
                    {children}
                </div>
            </div>
        </>
    )
}