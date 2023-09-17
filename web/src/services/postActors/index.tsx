export default function postActors(actorName: any): Promise<any> {

    return new Promise((resolve) => {
        resolve(actorName + ' postActors concluído')
        
        // fetch("/api/actors", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
