import api from "../api";

export default function getActors(): Promise<any> {

    return new Promise((resolve) => {
        // resolve([
        //     {
        //         name: 'Tom Hanks',
        //     },
        //     {
        //             name: 'Meryl Streep',
        //     },
        //     {
        //         name: 'Brad Pitt',
        //     },
        //     {
        //         name: 'Daniel Radcliff',
        //     },
        //     {
        //         name: 'Scarlett Johansson',
        //     }
        // ])
        
        api.get("/api/ator").then((res:any) => {
            console.log(res);
            resolve(res.json())
        });
    })
}
