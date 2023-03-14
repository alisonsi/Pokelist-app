import "./NewPokemon.css";
export default function NewPokemonprops(props) {
    let { nome, setNome, handleSubmit, setImagem, imagem } = props;

    return (
        <div className="form">

            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={nome} onChange={event => setNome(event.target.value)} />
                </label>
                <br />

                <label for="files" class="btn_select">Selecione uma imagem</label>
                <p>{imagem?.name}</p>
                <input id="files" style={{ visibility: 'hidden' }} type="file"  onChange={event => setImagem(event.target.files[0])} />

                {/* <label>
                    Selecione uma imagem:
                    <input type="file" onChange={event => setImagem(event.target.files[0])} />
                </label> */}
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}