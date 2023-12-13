import api from "../api";

export default function postClient(client: any): Promise<any> {

    alert("POST " + client.name + " " + client.sub)

    return new Promise((resolve, reject) => {
        api.post("/api/client", {
            name: client.name,
            birthDate: client.birthday,
            gender: client.bioSex,
            cpf: client.CPF,
            isActive: true,
            subNumber: client.sub, // Nao esta sendo registrado
            address: client.endereco, // Nao esta sendo registrado
            telefone: client.telefone, // Nao esta sendo registrado
            clientId: client.socio ? client.socio.id : '', // Nao esta sendo registrado
        }).then((res: any) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        });
    })
}
