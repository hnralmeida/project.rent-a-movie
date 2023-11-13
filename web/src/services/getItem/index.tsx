import api from "../api";

export default function getItem(): Promise<any> {

    return new Promise((resolve) => {
        api.get("/api/item").then((res:any) => {
            console.log(res);
            resolve(res.data)
        });
    })
}
