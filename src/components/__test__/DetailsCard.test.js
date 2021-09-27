import { mount } from "enzyme";
import DetailsCard from "../DetailsCard/DetailsCard";
import details from '../../api/__mocks__/details.json'

test("should render evolutions data with type", ()=>{
  const 
  const wrapper = mount(<DetilsCard details={details} type={type} />)

  expect(wrapper.find("p").first().text()).toBe("25")
  expect(wrapper.find("p").at(1).text()).toBe("pikachu")
})