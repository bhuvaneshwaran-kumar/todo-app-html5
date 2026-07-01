
import {render, screen} from "@testing-library/react";
import { MemoryRouter, } from "react-router-dom";
import {Provider} from "react-redux";
import store from "@/store/store";
import LoginPage from "./LoginPage";

function renderWithProviders(ui: React.ReactElement) {
    return render(
        <Provider store={store}>
            <MemoryRouter>
                {ui}
            </MemoryRouter>
        </Provider>
    );
}


describe("LoginPage", () => {
    test("renders the login form", () => {
        renderWithProviders(<LoginPage />);
        expect(screen.getByText("Login",  { selector: "div" })).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    })
    test("renders login navigation link", () => {
        renderWithProviders(<LoginPage />)

        const link = screen.getByRole("link", { name: /register/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/register")
    })
});