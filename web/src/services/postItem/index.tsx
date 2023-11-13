import api from "../api";

export default function postItem(item: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/item",
            {
                numSerie: item.numSerie,
                dtAquisicao: item.dtAquisicao,
                tipoItem: item.tipoItem
            }
        ).then((res: any) => {
            resolve(res.data)
        });
    })
}
