import { mount } from "enzyme";
import DetailsCard from "../DetailsCard/DetailsCard";
import types from "../../api/__mocks__/types.json";
import details from "../../api/__mocks__/details.json";
import typesResponseParser from "../../utils/typesResponseParser";

test("should render evolutions data with type", () => {
  const type = typesResponseParser(types);
  const wrapper = mount(<DetailsCard details={details} type={type} />);

  expect(wrapper.find("p").first().text()).toBe("Type: electric");
});

test("should render evolutions data with habitat", () => {
  const type = typesResponseParser(types);
  const wrapper = mount(<DetailsCard details={details} type={type} />);

  expect(wrapper.find("p").at(1).text()).toBe("Habitat: forest");
});
