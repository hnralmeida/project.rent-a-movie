export default function deleteActors(idActor: any): Promise<any> {

    return new Promise((resolve) => {
        resolve('delete ' + idActor)
        
        // fetch("/api/actors", {
        //     method: "GET",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
