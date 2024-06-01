import { render } from "@testing-library/react";
import Button from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button onClick={() => {}}>My button</Button>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          My button
        </button>
      </div>
    `);
  });
});
