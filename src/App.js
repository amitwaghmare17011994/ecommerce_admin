import React from "react";
import "./App.css";
import { Entry } from "./components/Entry"
import { Layout } from "antd";

class App extends React.Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Entry />
      </Layout>
    );
  }
}

export default App;
