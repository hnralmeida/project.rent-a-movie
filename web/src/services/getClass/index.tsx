export default function getClass(): Promise<any> {

    return new Promise((resolve) => {
        resolve([
            {
                nome: 'Forest Gump',
                valor: '5',
                prazoDevolucao: '2',
            },
            {
                nome: 'Terminal',
                valor: '4',
                prazoDevolucao: '3',
            },
            {
                nome: 'O Diabo Veste Prada',
                valor: '4',
                prazoDevolucao: '3',
            },
            {
                nome: 'Mamma Mia',
                valor: '5',
                prazoDevolucao: '2',
            },
            {
                nome: 'Once Upon a time in Hollywood',
                valor: '4',
                prazoDevolucao: '3',
            },
            {
                nome: 'Clube da Luta',
                valor: '5',
                prazoDevolucao: '2',
            },
            {
                nome: 'Lucy',
                valor: '5',
                prazoDevolucao: '2',
            },
            {
                nome: 'Viúva Negra',
                valor: '4',
                prazoDevolucao: '3',
            },
            {
                nome: 'Harry Potter e a Pedra Filosofal',
                valor: '5',
                prazoDevolucao: '2',
            },
            {
                nome: 'The Quiets Ones',
                valor: '4',
                prazoDevolucao: '3',
            },
            {
                nome: 'Swiss Army Man',
                valor: '4',
                prazoDevolucao: '3',
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
