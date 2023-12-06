import api from "../api";

export default function updateTitle(title: any): Promise<any> {

    return new Promise((resolve, reject) => {
        alert("Update title: " + title.diretor.name + " " + title.diretor.id);

        api.put("/api/title/" + title.id,
            {
                id: title.id,
                name: title.nome,
                year: title.ano,
                synopsis: title.sinopse,
                category: title.categoria,
                directorDTO: title.diretor,
                typeDTO: title.classe
            }).then((res: any) => {
                resolve(res.data)
            }).catch((error: any) => {
                reject(error)
            });
    })
}
