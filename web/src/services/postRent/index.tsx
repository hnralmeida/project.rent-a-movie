import api from "../api";

export default function postRent(rent: any): Promise<any> {

    return new Promise((resolve, reject) => {

        alert('Enviando: ' + rent.client.name + ' ' + rent.itemDTO.titleDTO.name);

        
        api.post("/api/lease", {
            dtLease: rent.dtLocacao,
            dtExpectedReturn: rent.dtPrevista,
            dtActualReturn: rent.returnDate,
            amountCharged: rent.valorCobrado,
            fineCharged: rent.multa,
            isPaid: rent.false,
            client: rent.cliente,
            item: rent.item,
        }).then((res: any) => {
            resolve(res.data)
        }).catch((err: any) => {
            reject(err);
        });
    })
}
