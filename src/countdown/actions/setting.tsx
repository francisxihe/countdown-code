import { SettingOutlined } from "@ant-design/icons";

import { Modal, Input, Form } from "antd";
import React, { useState } from "react";

// interface IForm {
//   countdown: number;
// }
export function Setting(
  props: {
    onConfirm: (settingForm: any) => void;
  } & React.HTMLProps<HTMLElement>
) {
  const [settingVisible, setSettingVisible] = useState(false);

  const initialValues = {
    countdown: 1500,
  };

  const onClickSetting = () => {
    setSettingVisible(true);
  };

  const onOkModal = (): void => {
    setSettingVisible(false);
    // props.onConfirm(nForm)
    // emit("confirm", nForm);
  };

  return (
    <>
      {/* <!-- <clock :countdown="1500"></clock> --> */}
      <SettingOutlined
        onClick={onClickSetting}
        className={props.className}
        style={{ color: "#fff", fontSize: "30px" }}
      ></SettingOutlined>
      <Modal open={settingVisible} title="Basic Modal" onOk={onOkModal}>
        <Form initialValues={initialValues}>
          <Form.Item label="倒计时时间">
            {/* <Input v-model:value="nForm.countdown" /> */}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
