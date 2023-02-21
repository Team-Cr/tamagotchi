import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { Button } from './Button';

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

describe('Button', () => {
  it('should render a button with the textContent "Test"', async () => {
    await act(async () => {
      render(<Button>Test</Button>, container);
    });

    const button = () =>
      container.querySelector<HTMLButtonElement>('button') ?? ({} as HTMLButtonElement);

    expect(button().innerHTML).toBe('Test');
  });

  it('should render a button with the type "submit"', async () => {
    await act(async () => {
      render(<Button type='submit' />, container);
    });

    const button = () =>
      container.querySelector<HTMLButtonElement>('button') ?? ({} as HTMLButtonElement);

    expect(button().type).toBe('submit');
  });

  it('should render a button with the icon', async () => {
    await act(async () => {
      render(<Button icon='testIcon' />, container);
    });

    const button = () =>
      container.querySelector<HTMLButtonElement>('button') ?? ({} as HTMLButtonElement);

    expect(button().innerHTML).toBe('<img src="testIcon" alt="Icon">');
  });
});
