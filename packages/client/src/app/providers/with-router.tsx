import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react/display-name
export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      {component()}
    </BrowserRouter>
  );
