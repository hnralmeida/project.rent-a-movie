import api from "../api";

export default function postClass(className: any, classValue: any, classDeadLine: any): Promise<any> {

    return new Promise((resolve) => {
        return new Promise((resolve, reject) => {
            api.post("/api/classe", { name: className, value: classValue }).then((res: any) => {
                resolve(res.data)
            });
        })
    })
}
