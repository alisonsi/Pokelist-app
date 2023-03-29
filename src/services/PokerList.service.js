import axios from 'axios';
export const PorkerListGetData = (offset) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    return axios.get(url).then((res) => {
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
    console.log("slot" + slot);
    return axios.get(detailUrl).then((res) => {
        console.log(res.data);
        const types = res.data.types.map(t => t.type.name);
        let link = res.data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        const link2 = res.data.sprites.front_default;

        if(!link){
            link = link2;
        }

        return {
            abilities: res.data.abilities,
            species: res.data.species,
            link,
            link2,
            name: res.data.name,
            types: types.toString()
        }
    })
}

export const DetailsAbilitys = (descUrl) => {

    console.log(descUrl);
    return axios.get(descUrl).then((res) => {
        console.log(res.data.effect_entries);
        let desc = res.data.effect_entries.filter((entry) => {
            return entry.language.name == "en"
        })
        console.log(desc);
        return desc[0].effect
    })
}