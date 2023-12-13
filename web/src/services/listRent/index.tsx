import api from "../api";

export default function getRent(): Promise<any> {

    return new Promise((resolve) => {
        
        api.get("/api/lease").then((res:any) => {
            console.log(res);
            resolve(res.data);
        });
    })
}
