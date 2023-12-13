import api from "../api";

export default function postItem(item: any): Promise<any> {

    return new Promise((resolve, reject) => {
        alert("Enviando " + item.title.name + " ")
        api.post("/api/item",
            {
                serialNumber: item.numSerie,
                itemType: item.tipoItem,
                dtAquisicao: item.dtAquisicao,
                titleDTO: item.title
            }
        ).then((res: any) => {
            resolve(res.data)
        }).catch((err: any) => {
            reject(err)
        });
    })
}
