import api from "../api";

export default function postItem(item: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/item",
            {
                serialNumber: item.numSerie,
                dtAquisicao: item.dtAquisicao,
                itemType: item.tipoItem,
                title_id: item.title_id
            }
        ).then((res: any) => {
            resolve(res.data)
        }).catch((err: any) => {
            reject(err)
        });
    })
}
