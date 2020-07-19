import React from "react";
import { connect } from "react-redux";
import { Layout, Table, Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Creators } from "../reducer/index";
import AddProdcutForm from "../components/AddProdcutForm";

const { Header } = Layout;

class Products extends React.Component {
  state = { showAddPanel: false };
  componentDidMount() {
    this.props.dispatchRequestProducts();
  }

  render() {
    const { products = [] } = this.props;
    const { showAddPanel } = this.state;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
    ];

    return (
      <Layout>
        <Header
          style={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <PlusSquareOutlined
            onClick={() => this.setState({ showAddPanel: !showAddPanel })}
            style={{ cursor: "pointer", fontSize: 30, color: "green" }}
          />
        </Header>
        {showAddPanel && (
          <Card style={{ marginBottom: 20 }}>
            <AddProdcutForm />
          </Card>
        )}
        <Table
          rowSelection={{ type: "checkbox" }}
          rowKey="id"
          dataSource={products}
          columns={columns}
        />
      </Layout>
    );
  }
}

export default connect(
  (state) => {
    return { products: state.root.products };
  },
  (dispatch) => {
    const { requestProducts } = Creators;
    return {
      dispatchRequestProducts: () => dispatch(requestProducts()),
    };
  }
)(Products);
