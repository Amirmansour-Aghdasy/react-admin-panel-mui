import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { HelmetProvider } from "react-helmet-async";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { UsersProvider } from "./contexts/users/UsersContext";

//* Create Rtl Cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

//* MUI Custom Theme
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "iransansfanum",
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <UsersProvider>
            <RouterProvider router={router} />
          </UsersProvider>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);

serviceWorkerRegistration.unregister();
