import React, { useEffect, useState } from 'react';
import getTitle from '../../services/getTitle';

interface ModalMovieProps {
    id: number;
}

export default function ModalMovie({ id }: ModalMovieProps) {

    const [show, setShow] = useState(false);

    const [movie, setMovie] = useState<any>();

    useEffect(() => {
        getTitle(id)
            .then((response) => setMovie(response))
            .catch((error) => alert(error));
    }, []);

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
                            <h1> {movie.name}</h1>
                            <p> {movie.synopsis}</p>
                        </div>
                    </div>

                </div>
            )}
        </>
    )

}