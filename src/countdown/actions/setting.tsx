import { Modal, Input, Form, Switch, Button } from "antd";
import React, { useContext, useState } from "react";
import { ClockContext } from "../context";
import { ReactComponent as SettingtSvg } from "static/icon/setting.svg";
import Icon from "@ant-design/icons/lib/components/Icon";

export function Setting(
  props: {
    onConfirm: () => void;
  } & React.HTMLProps<HTMLElement>
) {
  const [form] = Form.useForm();
  const [settingVisible, setSettingVisible] = useState(false);
  const { setCountdowns } = useContext(ClockContext);

  const initialValues = {
    needGap: true,
    countdowns: [1500, 300],
  };

  const onClickSetting = () => {
    setSettingVisible(true);
  };

  const onOkModal = (): void => {
    setSettingVisible(false);
    const { needGap, countdowns } = form.getFieldsValue();
    setCountdowns(needGap ? countdowns : [countdowns[0]]);
    props.onConfirm();
  };

  return (
    <>
      <Icon
        component={SettingtSvg}
        onClick={onClickSetting}
        className={props.className}
        style={props.style}
      ></Icon>
      <Modal
        open={settingVisible}
        title="设置"
        onOk={onOkModal}
        onCancel={() => {
          setSettingVisible(false);
        }}
      >
        <Form
          form={form}
          labelCol={{ span: 5, offset: 1 }}
          wrapperCol={{ span: 12, offset: 1 }}
          initialValues={initialValues}
        >
          <Form.Item label="Gap" name="needGap">
            <Switch />
          </Form.Item>
          <Form.Item label="Countdown" shouldUpdate>
            {({ getFieldValue }) =>
              getFieldValue("needGap") === false ? (
                <Form.Item name={["countdowns", "0"]}>
                  <Input type="number" placeholder="s" />
                </Form.Item>
              ) : (
                <Form.List name={["countdowns"]}>
                  {(fields, opt) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {fields.map(({ key, name }) => (
                        <Form.Item key={key} name={name}>
                          <Input type="number" placeholder="s" />
                        </Form.Item>
                      ))}
                      <Button type="dashed" onClick={() => opt.add()} block>
                        + Add Gap
                      </Button>
                    </div>
                  )}
                </Form.List>
              )
            }
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
