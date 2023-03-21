import { useCallback, useEffect, useState } from "react";
import { useRequest } from "./useRequest";

export default function usePokemon() {
    let [offset, setOffSet] = useState(0)
    let [url, setUrl] = useState(``)
    let { response, error, isLoading } = useRequest({ url: url, method: 'get' });
    let [result, setResult] = useState({});

    let parse = useCallback((data) => {
        console.log("useCallback",data);
        data.results = data.results.map((i) => {
            let splited = i.url.split("/");
            let indiceImg = splited[splited.length - 2];
            return {
                ...i,
                slot: indiceImg,
                link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${indiceImg}.gif`,
                link2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indiceImg}.png`,
            }
        })
        setResult({ ...data, offset: offset })
    },[response])

    useEffect(() => {
        console.log("here", offset);
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        setUrl(url)
        console.log("offset mudou")
    }, [offset])

    useEffect(() => {
        if (response?.results) {
            parse(response)
        }
    }, [response])

    return { result, error, isLoading, setOffSet }
}