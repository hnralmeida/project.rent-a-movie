export default function updateClass(className: any, classValue: any, classDeadline: any, classId: number): Promise<any> {

    return new Promise((resolve) => {
        resolve(className + 'updateClass concluído')
        
        // fetch("/api/class", {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        // }).then((res) => {
        //     resolve(res.json())
        // });
    })
}
