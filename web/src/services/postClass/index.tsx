export default function postClass(className: any, classValue: any, classDeadLine: any): Promise<any> {

    return new Promise((resolve) => {
        resolve(className + ' postClass concluído')
        
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
