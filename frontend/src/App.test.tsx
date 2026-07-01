import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </Provider>
  );
}


describe('App', () => {
  it('renders without crashing', () => {
    renderWithProviders(<App />)
    expect(screen.getByText("Login", { selector: "div" })).toBeInTheDocument()
  })
})
