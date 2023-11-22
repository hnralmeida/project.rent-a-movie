import api from "../api";

export default function updateTitle(title: any, titleId: number): Promise<any> {

    return new Promise((resolve, reject) => {
        console.log("Update title: " + title.name + " " + titleId)
        api.put("/api/ator/" + titleId,
            {
                name: title.nome,
                year: title.ano,
                synopsis: title.sinopse,
                category: title.categoria
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res: any) => {
                resolve(res.data)
            }).catch((error: any) => {
                reject(error)
            });
    })
}
