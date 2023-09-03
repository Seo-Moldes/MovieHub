
export const FetchApi = async (url: string, getToken: any) => {
    const token = await getToken();
    try {
        const response = await fetch( `http://localhost:3000/${url}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`
            },
        });

        if (response.ok) {
            const data = await response.json();
          return data;
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

