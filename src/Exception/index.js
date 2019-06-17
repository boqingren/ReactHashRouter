export const runInTryCatch = (Exception, handleError, runApp) => {
    try {
        runApp();
    } catch (error) {
        if (error && typeof error.type === "number") {
            handleError(error.type, Exception);
        }
    }
};

export default runInTryCatch;

// try {
//     throw {
//         type: Exception.envError.val,
//         desc: "",
//         data: { a: 1, b: 2 },
//         callback: data => {
//             console.log(data);
//         }
//     };
// } catch (error) {
//     if (error && typeof error.type === "number") {
//         handleError(error.type, Exception);
//     }
// }