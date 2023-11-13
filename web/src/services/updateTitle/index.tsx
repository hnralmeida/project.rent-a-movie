import api from "../api";

export default function updateTitle(nome: any, ano: any, sinopse: any, categoria: any, titleId: number): Promise<any> {

    return new Promise((resolve, reject) => {
        console.log("Update title: " + nome + " " + titleId);

        api.put("/api/title/" + titleId,
            {
                id: titleId,
                nome: nome,
                ano: ano,
                sinopse: sinopse,
                categoria: categoria,
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
