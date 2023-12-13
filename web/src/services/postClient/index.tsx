import api from "../api";

export default function postClient(client: any): Promise<any> {

    alert("POST " + client.name + " " + client.sub)

    return new Promise((resolve, reject) => {
        api.post("/api/socios", {
            name: client.name,
            birthDate: client.birthday,
            gender: client.bioSex,
            cpf: client.CPF,
            isActive: true,
            subNumber: client.sub,
            address: client.endereco,
            telefone: client.telefone
        }).then((res: any) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        });
    })
}
