import api from "../api";

export default function postClass(className: any, classValue: any, returnDate: any): Promise<any> {

    return new Promise((resolve) => {
        return new Promise((resolve, reject) => {
            api.post("/api/classe", { name: className, classValue: classValue, returnDate: returnDate }).then((res: any) => {
                resolve(res.data)
            });
        })
    })
}
