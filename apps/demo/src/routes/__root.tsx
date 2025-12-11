/* eslint-disable import/order */
import {
  TanStackDevtools,
  type TanStackDevtoolsReactInit,
} from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import Logo from '@/assets/logo.svg'

const devToolsConfig: TanStackDevtoolsReactInit = {
  config: {
    position: 'bottom-right',
  },
  plugins: [
    {
      name: 'Tanstack Router',
      render: <TanStackRouterDevtoolsPanel />,
    },
  ],
}
export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <Outlet />
      <TanStackDevtools {...devToolsConfig} />
    </>
  ),
})
