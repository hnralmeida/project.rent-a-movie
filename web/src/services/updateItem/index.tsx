import api from "../api";

export default function updateItem(numSerie: any, dtAquisicao: any, tipoItem: any, itemId: number): Promise<any> {

    return new Promise((resolve, reject) => {
        console.log("Update item: " + numSerie + " " + itemId);

        api.put("/api/item/" + itemId,
            {
                id: itemId,
                numSerie: numSerie,
                dtAquisicao: dtAquisicao,
                tipoItem: tipoItem
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
