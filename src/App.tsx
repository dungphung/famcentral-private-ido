import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { extendTheme, ChakraProvider, theme } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import BigNumber from 'bignumber.js'
import { QueryParamProvider } from 'use-query-params'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/utils/i18n'
import { MainLayout } from 'src/layouts'
import useEagerConnect from 'src/hooks/useEagerConnect'
import {
  HomePage,
  Projects,
  ProjectDetail,
  MembershipVault,
  NotFound,
  Investments,
  InvestmentDetail,
} from './pages'
import ModalProvider from './contexts/ModalContext'
import './App.css'
import { RefreshContextProvider } from './contexts/RefreshContext'
import { getLibrary } from './utils/web3React'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const customTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none', background: 'transparent' },
        _active: { background: 'transparent', boxShadow: 'none' },
        _hover: { bg: 'transparent' },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    lineColor: '#7878AE',
    blueLinkColor: '#00A3FF',
  },
  shadows: {
    ...theme.shadows,
    outline: 'none',
  },
})

const App = () => {
  useEagerConnect()
  return (
    <ChakraProvider theme={customTheme}>
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <RefreshContextProvider>
            <ModalProvider>
              <Router>
                <MainLayout>
                  <QueryParamProvider ReactRouterRoute={Route}>
                    <Switch>
                      <Route exact path="/">
                        <Investments />
                      </Route>

                      <Route path="/investments/:id">
                        <InvestmentDetail />
                      </Route>
                      <Route path="/investments">
                        <Investments />
                      </Route>

                      <Route component={NotFound} />
                    </Switch>
                  </QueryParamProvider>
                </MainLayout>
              </Router>
            </ModalProvider>
          </RefreshContextProvider>
        </HelmetProvider>
      </I18nextProvider>
    </ChakraProvider>
  )
}

const ContainerApp = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

export default ContainerApp
