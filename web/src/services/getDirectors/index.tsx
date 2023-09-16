export default function getDirectors(): Promise<any> {

    return new Promise((resolve) => {
        resolve([
            {
                nome: 'Tom Hanks',
            },
            {
                nome: 'Meryl Streep',
            },
            {
                nome: 'Brad Pitt',
            },
            {
                nome: 'Daniel Radcliff',
            },
            {
                nome: 'Scarlett Johansson',
            }
        ])
        
        // fetch("/api/actors", {
        //     method: "GET",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
