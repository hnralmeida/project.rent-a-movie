import api from "../api";

export default function getTitle(id: number): Promise<any> {

    return new Promise((resolve) => {
        api.get("/api/title/"+id).then((res:any) => {
            console.log(res);
            resolve(res.data)
        });
    })
}
