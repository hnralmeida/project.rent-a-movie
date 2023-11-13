import api from "../api";

export default function deleteTitle(idTitle: any): Promise<any> {

    return new Promise((resolve) => {

        api.delete("/api/title/" + idTitle).then((res: any) => {
            console.log(res);
            resolve(res.data)
        });
    })

}
