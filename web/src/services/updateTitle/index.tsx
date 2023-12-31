import api from "../api";

export default function updateTitle(title: any): Promise<any> {

    return new Promise((resolve, reject) => {
        alert(title.atores)

        api.put("/api/title/" + title.id,
            {
                id: title.id,
                name: title.nome,
                year: title.ano,
                synopsis: title.sinopse,
                category: title.categoria,
                director: title.diretor,
                type: title.classe,
                actorList: title.atores
            }).then((res: any) => {
                resolve(res.data)
            }).catch((error: any) => {
                alert(error.message)
                reject(error)
            });
    })
}
