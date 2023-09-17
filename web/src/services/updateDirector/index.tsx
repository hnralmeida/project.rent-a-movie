export default function updateDirector(actorName: any, actorId: number): Promise<any> {

    return new Promise((resolve) => {
        resolve(actorName + 'updateDirectors concluído')
        
        // fetch("/api/directors", {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
