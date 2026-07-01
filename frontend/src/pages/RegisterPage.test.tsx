
import {render, screen} from "@testing-library/react";
import { MemoryRouter, } from "react-router-dom";
import {Provider} from "react-redux";
import store from "@/store/store";
import RegisterPage from "./RegisterPage";

function renderWithProviders(ui: React.ReactElement) {
    return render(
        <Provider store={store}>
            <MemoryRouter>
                {ui}
            </MemoryRouter>
        </Provider>
    );
}


describe("RegisterPage", () => {
    test("renders the register form", () => {
        renderWithProviders(<RegisterPage />);
        expect(screen.getByText("Register",  { selector: "div" })).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    })
    test("renders login navigation link", () => {
        renderWithProviders(<RegisterPage />)

        const link = screen.getByRole("link", { name: /login/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/login")
    })
});
