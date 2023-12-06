import api from "../api";

export default function deleteClient(idClient: any): Promise<any> {

    return new Promise((resolve) => {
        api.delete("/api/client/" + idClient).then((res: any) => {
            console.log(res);
            resolve(res.data);
        });
    })

}
