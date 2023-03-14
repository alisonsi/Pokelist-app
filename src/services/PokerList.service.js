import axiosInstance from "./Axios";

export const PorkerListGetData = (offset) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    return axiosInstance.get(url).then((res) => {
        res.data.results = res.data.results.map((i) => {
            let splited = i.url.split("/");
            let indiceImg = splited[splited.length - 2];
            return {
                ...i,
                slot: indiceImg,
                link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${indiceImg}.gif`,
                link2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indiceImg}.png`,
            }
        })
        return { ...res.data, offset: offset }
    })
}

export const PokerItemDetailGetData = (slot) => {
    let detailUrl = `https://pokeapi.co/api/v2/pokemon/${slot}`;

    return axiosInstance.get(detailUrl).then((res) => {
        return res.data.abilities.filter((i) => i.ability.slot == slot)
    }).then((abilitys) => {
        return axiosInstance.get(abilitys.url);
    }).then((ability) => {
        return ability.data.effect_entries.filter((entry) => {
            return entry.language.name == "en"
        })
    })
}