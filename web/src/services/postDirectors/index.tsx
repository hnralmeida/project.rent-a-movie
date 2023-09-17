export default function postDirectors(directorName: any): Promise<any> {

    return new Promise((resolve) => {
        resolve(directorName + ' postDirectors concluído')
        
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
