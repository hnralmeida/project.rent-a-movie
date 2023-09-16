export default function updateActors(): Promise<any> {

    return new Promise((resolve) => {
        resolve('updateActors concluído')
        
        // fetch("/api/actors", {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
