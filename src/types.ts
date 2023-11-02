export type TResource = {
    id: number | string,
    time: number,
    title: string,
    domain: string
}

export type TComment = {
    id: number | string,
    user:string,
    content: string,
    time_ago: string,
    title:string
}