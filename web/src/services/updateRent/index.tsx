import api from "../api";

export default function updateent(rent: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.put("/api/client/" + rent.id,
            {
                dtLease: rent.dtLease,
                dtExpectedReturn: rent.dtExpectedReturn,
                dtActualReturn: rent.dtActualReturn,
                amountCharged: rent.amountCharged,
                fineCharged: rent.fineCharged,
                clientId: rent.clientId,
                typeClien: rent.typeClien
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
