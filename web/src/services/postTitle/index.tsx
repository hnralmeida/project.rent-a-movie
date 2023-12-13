import api from "../api";

export default function postTitle(title: any): Promise<any> {

    return new Promise((resolve, reject) => {

        api.post("/api/title",
            {
                name: title.nome,
                year: title.ano,
                synopsis: title.sinopse,
                category: title.categoria,
                director: title.diretor,
                type: title.classe,
                actorList: title.atores
            }
        ).then((res: any) => {
            resolve(res.data)
        }).catch(err => reject(err));
    })
}
