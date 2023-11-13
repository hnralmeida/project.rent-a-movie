import api from "../api";

export default function postTitle(title: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/title",
            {
                nome: title.nome,
                ano: title.ano,
                sinopse: title.sinopse,
                categoria: title.categoria
            }
        ).then((res: any) => {
            resolve(res.data)
        }).catch(err => reject(err));
    })
}
