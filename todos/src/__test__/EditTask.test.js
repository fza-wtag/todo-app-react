import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import EditTask from "components/EditTask";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureMockStore([thunk]);

describe("<EditTask/>", () => {
  let store;
  const id = "123";
  const date = "2022-03-12";
  const isCompleted = false;
  const completedDate = null;
  const onEdit = false;
  const currentData = "example task";

  beforeEach(() => {
    store = mockStore({
      loadingReducers: {
        editCardLoadingState: false,
        currentSelectedId: "",
      },
    });
  });

  it("should render the component with inputData passed as props", () => {
    render(
      <Provider store={store}>
        <EditTask
          id={id}
          date={date}
          isCompleted={isCompleted}
          completedDate={completedDate}
          onEdit={onEdit}
          currentData={currentData}
        />
      </Provider>
    );

    expect(screen.getByTestId("edit-task")).toBeInTheDocument();
    expect(screen.getByText("example task")).toBeInTheDocument();
  });

  it("should update inputData state when user types on the text area", () => {
    render(
      <Provider store={store}>
        <EditTask
          id={id}
          date={date}
          isCompleted={isCompleted}
          completedDate={completedDate}
          onEdit={onEdit}
          currentData={currentData}
        />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "updated task" } });

    expect(input.value).toBe("updated task");
  });
});
