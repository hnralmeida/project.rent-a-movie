import api from "../api";

export default function (query: string, filter: string): Promise<any> {
    return new Promise((resolve, reject) => {
        switch (filter) {
            case "title": {
                api.get("/api/byName/" + query).then((res: any) => {
                    resolve(res.data)
                }).catch((error: any) => {
                    reject(error)
                })
                break;
            }
            case "category": {
                api.get("/api/byCategory/" + query).then((res: any) => {
                    resolve(res.data)
                }).catch((error: any) => {
                    reject(error)
                })
                break;
            }
            case "director": {
                api.get("/api/byDirector/" + query).then((res: any) => {
                    resolve(res.data)
                }).catch((error: any) => {
                    reject(error)
                })
                break;
            }

        }
    })
};