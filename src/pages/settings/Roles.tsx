import { SearchOutlined } from "@ant-design/icons";
import { InputRef, Typography } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import AppModal from "../../components/Modal";

interface DataType {
  key: string;
  role: string;
  age: number;
  permissions: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    role: "John Brown",
    age: 32,
    permissions: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    role: "Joe Black",
    age: 42,
    permissions: "London No. 1 Lake Park",
  },
  {
    key: "3",
    role: "Jim Green",
    age: 32,
    permissions: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    role: "Jim Red",
    age: 32,
    permissions: "London No. 2 Lake Park",
  },
  {
    key: "4",
    role: "Jim Red",
    age: 32,
    permissions: "London No. 2 Lake Park",
  },
  {
    key: "4",
    role: "Jim Red",
    age: 32,
    permissions: "London No. 2 Lake Park",
  },
  {
    key: "5",
    role: "Jim Red",
    age: 32,
    permissions: "London No. 2 Lake Park",
  },
];

const Roles = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "35%",
      ...getColumnSearchProps("role"),
    },

    {
      title: "Permissions",
      dataIndex: "permissions",
      key: "permissions",
      width: "50%",
      ...getColumnSearchProps("permissions"),
      sorter: (a, b) => a.permissions.length - b.permissions.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (_, record) => (
        <Space size="middle">
          <Button type="ghost">Edit</Button>
          <Button type="ghost">Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="">
      <div className="flex mb-2">
        <Typography.Title level={3} className="mr-auto">
          Manage Roles
        </Typography.Title>
        <Button type="primary" onClick={openModalHandler}>
          Add Role
        </Button>
        <AppModal
          title="GREAT WORK."
          isOpen={openModal}
          onClose={closeModalHandler}
        >
          This is my example modal.
        </AppModal>
      </div>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default Roles;
