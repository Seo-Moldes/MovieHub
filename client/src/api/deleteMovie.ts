export const deleteMovie = async (url: string, getToken: any) => {

    const token = await getToken();

    try {

        const response = await fetch(url, {

            method: "DELETE",
            headers: {
                
                authorization: `Bearer ${token}`,
                
            },
           
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