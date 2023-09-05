export const createMovie = async (url: string, data: any, getToken: any) => {

    const token = await getToken();
    const formData = new FormData()
   
    

    formData.append("title", data.Name)
    formData.append("genres", data.Genre)
    formData.append("year", data.Year)
    formData.append("score", data.Score)
    formData.append("image", data.Image[0])

    try {

        const response = await fetch(url, {

            method: "POST",
            headers: {

                authorization: `Bearer ${token}`,
            },
            body: formData
        })

        if (response.ok) {

           
        } else {
            throw new Error("No response");
        }

    } catch (error) {
        
    }
}