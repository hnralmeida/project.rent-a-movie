export default function deleteClass(idClass: any): Promise<any> {

    return new Promise((resolve) => {
        resolve('delete ' + idClass)
        
        // fetch("/api/class", {
        //     method: "DELETE",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
