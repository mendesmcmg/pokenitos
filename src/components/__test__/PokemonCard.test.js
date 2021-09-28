import { mount } from "enzyme";
import { act } from "@testing-library/react";
import axios from "axios";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import mockDetails from "../../api/__mocks__/details.json";
import mockType from "../../api/__mocks__/types.json";
import mockEvolutions from "../../api/__mocks__/evolutions3.json";
import { PokemonCardTitle } from "../PokemonCard/styles";
import DetailsCard from "../DetailsCard/DetailsCard";

jest.mock("axios");

const axiosMock = async () =>
  await axios.get
    .mockImplementationOnce((url) => {
      if (url === "https://pokeapi.co/api/v2/pokemon-species/25/") {
        return Promise.resolve({ data: mockDetails });
      }
    })
    .mockImplementationOnce((url) => {
      if (url === "https://pokeapi.co/api/v2/evolution-chain/10/") {
        return Promise.resolve({ data: mockEvolutions });
      }
    })
    .mockImplementationOnce((url) => {
      if (url === "https://pokeapi.co/api/v2/pokemon/25/") {
        return Promise.resolve({ data: mockType });
      }
    });

describe("PokemonCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show pokemon card", async () => {
    let wrapper;

    wrapper = mount(
      <PokemonCard name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />
    );

    wrapper.update();

    expect(wrapper.find("p").at(1).text()).toEqual("pikachu");
    expect(wrapper.find("button")).toBeTruthy();
  });

  test("should show modal after button click", async () => {
    let wrapper;

    wrapper = mount(
      <PokemonCard name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />
    );

    wrapper.update();
    await act(async () => {
      await axiosMock();

      wrapper.find("button").simulate("click");
    });
    wrapper.update();

    expect(wrapper.find(PokemonCardTitle)).toBeTruthy();
  });

  test("should show evolutions card after button click", async () => {
    let wrapper;

    wrapper = mount(
      <PokemonCard name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />
    );

    wrapper.update();
    await act(async () => {
      await axiosMock();

      wrapper.find("button").simulate("click");
    });
    wrapper.update();

    expect(wrapper.find(DetailsCard)).toBeTruthy();
  });
});
