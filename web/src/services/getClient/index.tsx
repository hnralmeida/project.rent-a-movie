import api from "../api";

export default function getClient(id: any): Promise<any> {

    return new Promise((resolve) => {
        
        api.get("/api/client/" + id).then((res:any) => {
            console.log(res);
            resolve(res.data)
        });
    })
}
