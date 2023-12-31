import api from "../api";

export default function listTitle(): Promise<any> {

    return new Promise((resolve) => {
        api.get("/api/title").then((res: any) => {
            resolve(res.data);
        });
    })
}
