export const postApi = async (url: string, data: any, getToken: any) => {

    const token = await getToken();

    try {

        const response = await fetch(url, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
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