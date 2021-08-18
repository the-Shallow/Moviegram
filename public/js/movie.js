
export const getMovieOverview = async (s) => {
    try {
        window.setTimeout(() => {
            location.assign(`/?movie=${s}`)
        }, 1000);
    } catch (err) {
        console.log(err);
    }
}