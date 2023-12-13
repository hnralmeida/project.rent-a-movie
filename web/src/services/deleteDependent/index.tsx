import api from "../api";

export default function deleteDependent(idDependent: any): Promise<any> {

    return new Promise((resolve) => {
        api.delete("/api/dependent/" + idDependent).then((res: any) => {
            console.log(res);
            resolve(res.data);
        });
    })

}
