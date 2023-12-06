import api from "../api";

export default function updateactor(actor: string, actorId: number): Promise<any> {

    return new Promise((resolve, reject) => {
        console.log("Update actor: " + actor + " " + actorId)
        api.put("/api/ator/" + actorId,
            {
                name: actor,
                id: actorId
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res: any) => {
                resolve(res.data)
            }).catch((error: any) => {
                reject(error)
            });
    })
}
