import api from "../api";

export default function postDependent(dependent: any): Promise<any> {

    alert("POST " + dependent.name + " " + dependent.sub)

    return new Promise((resolve, reject) => {
        api.post("/api/dependent", {
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
