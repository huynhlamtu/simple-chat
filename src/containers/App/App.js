import reactJoiValidation from "react-joi-validation";
import { Provider } from "react-redux";
import "./App.css";
import store from "../../store/index";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import "./App.css";

function App() {
  const state = store.getState();
  const { activeThreadId, threads } = state;
  const activeThread = threads.find((t) => t.id === activeThreadId);
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar threads={threads} />
        <Main activeThread={activeThread} activeThreadId={activeThreadId} />
      </div>
    </Provider>
  );
}

export default App;
