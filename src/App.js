import MyRoutes from './MyRoutes';
import { ThemeProvider } from './ThemeContext'

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <MyRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
