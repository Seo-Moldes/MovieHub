// export const postApi = async (url: string, data: any, getToken: any) => {

// const token = await getToken();

// try {

//     const response = await fetch(url, {

//         method: "POST",
//         headers: {

//             authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//     })

//     if (response.ok) {

//         console.log("Successfully loged");
        
//     }else{
//         throw new Error("Network response was not ok");
        
//     }

// } catch (error) {
//     console.log(error);

// }

// }