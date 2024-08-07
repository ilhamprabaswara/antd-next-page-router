import { Table1 } from "@/components/tabs-table-dropdown/table-1";
import { Table2 } from "@/components/tabs-table-dropdown/table-2";
import { Tabs, TabsProps } from "antd";
import { useRouter } from "next/router";

const TabsTableDropdownPage = () => {
  const router = useRouter();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: <Table1 />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <Table2 />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  const onChange = (key: string) => {
    router.push({ query: { activeTab: key } });
  };

  return (
    <Tabs
      style={{ padding: "20px" }}
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default TabsTableDropdownPage;
