import { AppBar, Box, createMuiTheme, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import './App.css'
import ConfigProvider from './components/ConfigProvider'
import Feed from './components/Feed'
import FeedProvider from './components/FeedProvider'
import FeedSearchBar from './components/FeedSearchBar'
import FeedViewSwitch from './components/FeedViewSwitch'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1AEFE3' },
    secondary: { main: '#FFD100' },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FeedProvider>
        <ConfigProvider>
          <Box p={4}>
            <AppBar>
              <Toolbar>
                <Box p={3}>
                  <Typography variant='h4'>
                    ColumbusUnderground
                  </Typography>
                </Box>
                <FeedSearchBar />
              </Toolbar>
            </AppBar>
            <Box mt={10}>
              <FeedViewSwitch />
            </Box>
            <Feed />
          </Box>
        </ConfigProvider>
      </FeedProvider>
    </ThemeProvider>
  );
}

export default App;
