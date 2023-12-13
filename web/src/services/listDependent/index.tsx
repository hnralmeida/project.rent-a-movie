import api from "../api";

export default function getDependent(): Promise<any> {

    return new Promise((resolve) => {
        
        api.get("/api/dependent").then((res:any) => {
            console.log(res);
            resolve(res.data)
        });
    })
}
