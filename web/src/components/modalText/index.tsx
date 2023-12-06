import React, { useEffect, useState } from 'react';

interface ModalTextProps {
    text: string;
    header: string;
}

export default function ModalText({ text, header }: ModalTextProps) {

    const [show, setShow] = useState(false);

    return (
        <>
            <button
                id="myBtn"
                onClick={
                    () => setShow(!show)
                }
            >
                Open Modal
            </button>

            {show && (
                <div id="myModal" className="modal">

                    <div className="modal-content">
                        <span
                            className="close"
                            onClick={
                                () => setShow(!show)
                            }
                        >
                            &times;
                        </span>
                        <div>
                            <h1> {header} </h1>
                            <p> {text} </p>
                        </div>
                    </div>

                </div>
            )}
        </>
    )

}