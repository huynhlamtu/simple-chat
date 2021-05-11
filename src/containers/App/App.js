import { Provider } from "react-redux";
import "./App.css";
import store from "../../store/index";
import "./App.css";
import Sidebar from "../../components/Main/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function App() {
  const state = store.getState();
  const { activeThreadId, threads, user } = state;
  const activeThread = threads.find((t) => t.id === activeThreadId);

  const TITLE = activeThread ? `Chat App - ${activeThread.title}` : "Chat App";

  return (
    <Provider store={store}>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{TITLE}</title>
        </Helmet>
        <div className="header">
          <Header user={user} threads={threads} />
        </div>
        <div className="content">
          <Sidebar threads={threads} />
          <Main activeThread={activeThread} activeThreadId={activeThreadId} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
