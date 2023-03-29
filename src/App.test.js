import { createEvent, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios'; // importando a biblioteca axios para simular uma chamada à API
import userEvent from '@testing-library/user-event';

jest.mock('axios'); // criando um mock para a biblioteca axios

test('renders name Pokedex', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokedex/i);
  expect(linkElement).toBeInTheDocument();
});


describe('Teste de exibição de lista de imagens', () => {
  it('deve exibir a lista de imagens após a requisição à API', async () => {
    const data =
      { "count": 1281, "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20", "previous": null, "results": [{ "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }, { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" }, { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" }, { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" }, { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" }, { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" }, { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" }, { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" }, { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" }, { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" }, { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" }, { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" }, { "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/" }, { "name": "kakuna", "url": "https://pokeapi.co/api/v2/pokemon/14/" }, { "name": "beedrill", "url": "https://pokeapi.co/api/v2/pokemon/15/" }, { "name": "pidgey", "url": "https://pokeapi.co/api/v2/pokemon/16/" }, { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" }, { "name": "pidgeot", "url": "https://pokeapi.co/api/v2/pokemon/18/" }, { "name": "rattata", "url": "https://pokeapi.co/api/v2/pokemon/19/" }, { "name": "raticate", "url": "https://pokeapi.co/api/v2/pokemon/20/" }] }


    axios.get = jest.fn().mockResolvedValue({
      data
    });

    const { getByText, getAllByRole } = render(<App />); // renderizando o componente que exibe a lista de imagens

    await waitFor(async () => {
      const imagesList = getByText(/bulbasaur/i);
      expect(imagesList).toBeInTheDocument();
      
      fireEvent.click(imagesList)
      let hb = getByText(/Habilidades/i)
      expect(hb).toBeInTheDocument()
    })

  });
});