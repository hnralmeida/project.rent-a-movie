import api from "../api";

export default function getDependent(id: any): Promise<any> {

    return new Promise((resolve) => {
        
        api.get("/api/dependent/" + id).then((res:any) => {
            console.log(res);
            resolve(res.data)
        });
    })
}
