export default function postActors(): Promise<any> {

    return new Promise((resolve) => {
        resolve('postActors concluído')
        
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
