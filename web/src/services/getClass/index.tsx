import api from "../api";

export default function getClass(): Promise<any> {

    return new Promise((resolve) => {
        api.get("/api/classe").then((res:any) => {
            console.log(res);
            resolve({
                name: res.data.name,
                value: res.data.classValue,
                deadline: res.data.deadline
            })
        });
    })
}
