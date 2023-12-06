import api from "../api";

export default function updateItem(item: any): Promise<any> {

    return new Promise((resolve, reject) => {
        console.log("Update item: " + item.numSerie + " " + item.id);

        api.put("/api/item/" + item.id,
            {
                id: item.id,
                serialNumber: item.numSerie,
                dtAquisicao: item.dtAquisicao,
                itemType: item.tipoItem,
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
