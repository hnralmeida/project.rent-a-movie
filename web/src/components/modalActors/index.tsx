import React, { useEffect, useState } from 'react';

interface ModalActorsProps {
    title_id: string;
    cast: any[];
}

export default function ModalActors({ title_id, cast }: ModalActorsProps) {

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
                            <p>Elenco: </p>
                            <ul>
                                {cast ? cast.map((actor) => (
                                    <div key={actor.id}>
                                        <li>
                                            <p>{actor.name}</p>
                                        </li>
                                    </div>
                                ))
                                    :
                                    null
                                }
                            </ul>

                        </div>
                    </div>

                </div>
            )}
        </>
    )

}