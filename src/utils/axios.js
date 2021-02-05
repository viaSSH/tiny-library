import axios from "axios";

// const request = axios.create({
//     baseURL: "https://api.themoviedb.org/3/",
//     params: {
//         api_key: "9db798875cd6e95d1d71e772df1dc878",
//         language: "ko-KR"
//     }
// })

const request = axios.create({
    baseURL: "https://o8zcxzilbd.execute-api.ap-northeast-2.amazonaws.com/v1/",
    params: {
        api_key: "9db798875cd6e95d1d71e772df1dc878"
    }
})

export const movieApi = {
    nowHaving: () => request.get("books"),


}

// export const movieApi = {
//     nowPlaying: () => request.get("movie/now_playing"),
//     popular: () => request.get("/movie/popular"),
//     upComing: () => request.get("/movie/upcoming"),
//     movieDetail: (id) => request.get(`/movie/${id}`, {
//
//             params: { append_to_response: "videos" },
//
//     }),
//     search: (keyword) =>
//         request.get("/search/movie", {
//             params: {
//                 query: keyword,
//             }
//         })
//
// }
