import api from "../api";

export default function postRent(rent: any): Promise<any> {

    return new Promise((resolve, reject) => {
        api.post("/api/ator", {
            dtLease: rent.dtLease,
            dtExpectedReturn: rent.dtExpectedReturn,
            dtActualReturn: rent.dtActualReturn,
            amountCharged: rent.amountCharged,
            fineCharged: rent.fineCharged,
            clientId: rent.clientId,
            typeClien: rent.typeClien
        }).then((res: any) => {
            resolve(res.data)
        });
    })
}
