import api from "../api";

export default function getDirectors(): Promise<any> {

    return new Promise((resolve) => {
        api.get("/api/diretor").then((res:any) => {
            resolve(res.data)
        });
    })
}
