import api from "../api";

export default function updateTitle(title: any): Promise<any> {

    return new Promise((resolve, reject) => {
        console.log("Update title: " + title.nome + " " + title.id);

        api.put("/api/title/" + title.id,
            {
                name: title.nome,
                year: title.ano,
                synopsis: title.sinopse,
                id_diretor: title.diretor,
                id_type: title.classe,
                category: title.categoria,
                actors: title.atores,
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
