export default function getActors(): Promise<any> {

    return new Promise((resolve) => {
        resolve([
            {
                name: 'Tom Hanks',
            },
            {
                    name: 'Meryl Streep',
            },
            {
                name: 'Brad Pitt',
            },
            {
                name: 'Daniel Radcliff',
            },
            {
                name: 'Scarlett Johansson',
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
