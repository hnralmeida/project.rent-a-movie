import api from "../api";

export default function updateClient(client: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/ator", {
            name: client.name,
            birthDate: client.birthDate,
            gender: client.gender,
            isActive: client.isActive,
        }).then((res: any) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        });
    })
}
