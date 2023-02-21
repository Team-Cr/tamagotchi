import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { Link } from './Link';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

let container: HTMLElement;
beforeEach(() => {
  // Создание контейнера для результата работы рендера перед каждым тестом
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Очистка контейнера после каждого теста
  unmountComponentAtNode(container);
  container.remove();
});

const link = () => container.querySelector<HTMLButtonElement>('a') ?? ({} as HTMLButtonElement);

describe('Link', () => {
  it('should render a Link with the attribute href', async () => {
    function TestPage() {
      return (
        <div>
          <Link href='testUrl' />
        </div>
      );
    }

    await act(async () => {
      render(
        <Router>
          <Routes>
            <Route path={'/'} element={<TestPage />} />
          </Routes>
        </Router>,
        container,
      );
    });

    expect(link().getAttribute('href')).toMatch(/testUrl/);
  });

  it('should render a Link with the icon', async () => {
    function TestPage() {
      return (
        <div>
          <Link href='testUrl' icon='testIcon' />
        </div>
      );
    }

    await act(async () => {
      render(
        <Router>
          <Routes>
            <Route path={'/'} element={<TestPage />} />
          </Routes>
        </Router>,
        container,
      );
    });

    expect(link().innerHTML).toBe('<img src="testIcon" alt="Icon">');
  });
});
