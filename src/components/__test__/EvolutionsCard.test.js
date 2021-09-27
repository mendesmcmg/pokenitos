import { mount } from "enzyme";
import EvolutionsCard from "../EvolutionsCard/EvolutionsCard";

test("should render evolutions data with name and id", ()=>{
  const data = {
    name: "pikachu",
    url: "https://pokeapi.co/api/v2/pokemon-species/25/"
  }
  const wrapper = mount(<EvolutionsCard evolution={data} />)
  const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"

  expect(wrapper.find("p").first().text()).toBe("25")
  expect(wrapper.find("p").at(1).text()).toBe("pikachu")
  expect(wrapper.find("img").prop("src")).toEqual(imageUrl)
})