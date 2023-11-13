import api from "../api";

export default function deleteItem(idItem: any): Promise<any> {

    return new Promise((resolve) => {

        api.delete("/api/item/" + idItem).then((res: any) => {
            console.log(res);
            resolve(res.data)
        });
    })

}
