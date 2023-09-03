export const editMovie = async (url: string, data: any, getToken: any) => {

    const token = await getToken();
    const formData = new FormData();

    formData.append("title", data.title)
    formData.append("genres", data.genres)
    formData.append("year", data.year)
    formData.append("score", data.score)
   
    try {

        const response = await fetch(url, {

            method: "PUT",
            headers: {

                authorization: `Bearer ${token}`,
            },
            body: formData
        })

        if (response.ok) {

            console.log(response);

        } else {
            throw new Error("No response");
        }

    } catch (error) {
        console.log(error);
    }
}