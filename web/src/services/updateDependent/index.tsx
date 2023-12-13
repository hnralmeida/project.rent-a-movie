import api from "../api";

export default function updateDepedent(dependent: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/client" + dependent.id, {
            name: dependent.name,
            birthDate: dependent.birthday,
            gender: dependent.bioSex,
            isActive: true,
            subNumber: dependent.sub,
            partner: dependent.socio,
        }).then((res: any) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        });
    })
}
