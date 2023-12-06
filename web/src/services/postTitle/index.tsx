import api from "../api";

export default function postTitle(title: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/title",
            {
                name: title.nome,
                year: title.ano,
                synopsis: title.sinopse,
                category: title.categoria,
                directorDTO: title.diretor,
                typeDTO: title.classe
            }
        ).then((res: any) => {
            resolve(res.data)
        }).catch(err => reject(err));
    })
}
