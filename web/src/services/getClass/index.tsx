export default function getClass(): Promise<any> {

    return new Promise((resolve) => {
        resolve([
            {
                name: 'Forest Gump',
                value: '5',
                deadline: '2',
            },
            {
                name: 'Terminal',
                value: '4',
                deadline: '3',
            },
            {
                name: 'O Diabo Veste Prada',
                value: '4',
                deadline: '3',
            },
            {
                name: 'Mamma Mia',
                value: '5',
                deadline: '2',
            },
            {
                name: 'Once Upon a time in Hollywood',
                value: '4',
                deadline: '3',
            },
            {
                name: 'Clube da Luta',
                value: '5',
                deadline: '2',
            },
            {
                name: 'Lucy',
                value: '5',
                deadline: '2',
            },
            {
                name: 'Viúva Negra',
                value: '4',
                deadline: '3',
            },
            {
                name: 'Harry Potter e a Pedra Filosofal',
                value: '5',
                deadline: '2',
            },
            {
                name: 'The Quiets Ones',
                value: '4',
                deadline: '3',
            },
            {
                name: 'Swiss Army Man',
                value: '4',
                deadline: '3',
            }
        ])
        
        // fetch("/api/class", {
        //     method: "GET",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
