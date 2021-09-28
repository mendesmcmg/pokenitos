import { mount } from "enzyme";
import { act } from "@testing-library/react";
import axios from "axios";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PokemonList from "../PokemonList/PokemonList";
import mockGetAllPokemons from "../../api/__mocks__/getAllPokemons.json";

jest.mock("axios");

const axiosMock = async () =>
  await axios.get.mockImplementationOnce((url) => {
    if (url === "https://pokeapi.co/api/v2/pokemon?limit=151") {
      return Promise.resolve({ data: mockGetAllPokemons });
    }
  });

describe("PokemonList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return 151 pokemons", async () => {
    let wrapper;

    await act(async () => {
      await axiosMock();
      wrapper = mount(<PokemonList />);
    });

    wrapper.update();

    expect(wrapper.find(PokemonCard)).toHaveLength(151);
  });

  test("should begin with bulbassaur", async () => {
    let wrapper;

    await act(async () => {
      await axiosMock();
      wrapper = mount(<PokemonList />);
    });

    wrapper.update();

    expect(wrapper.find(PokemonCard).find("p").at(1).text()).toEqual("bulbasaur");
  });

  test("should return filtered list", async () => {
    let wrapper;

    await act(async () => {
      await axiosMock();
      wrapper = mount(<PokemonList />);
    });

    wrapper.update();
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'ka'}})

    expect(wrapper.find(PokemonCard)).toHaveLength(9);
  });
});
