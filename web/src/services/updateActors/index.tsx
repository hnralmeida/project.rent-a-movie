export default function updateActors(actorName: any, actorId: number): Promise<any> {

    return new Promise((resolve) => {
        resolve(actorName + 'updateActors concluído')
        
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
