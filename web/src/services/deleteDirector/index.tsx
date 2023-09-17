export default function deleteDirectors(idDirector: any): Promise<any> {

    return new Promise((resolve) => {
        resolve('delete ' + idDirector)
        
        // fetch("/api/actors", {
        //     method: "GET",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
