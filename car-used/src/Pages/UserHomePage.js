import React, { useEffect, useState } from "react";
import useNavBar from "../hooks/useNavBar";
import {
  SellListContainer,
  DeleteBtn,
  SellItem,
  DetailTable,
  ShowImage,
  DetailBodyTable,
  Tr,
  Td,
  TdHeader,
  TrPC,
} from "../Styled/UserHomePage/UserHomePage.styled";
import { FaTimes } from "react-icons/fa";
import jsonData from "../Data/Data_URL.json";
import useAuth from "../hooks/useAuth";

const UserHomePage = () => {
  const { auth } = useAuth();
  const { setNavLinks } = useNavBar();
  const [listOnSell, setListOnSell] = useState([]);

  useEffect(() => {
    setNavLinks((x) =>
      x.map((xx) =>
        xx.path === "/auth/UserHome"
          ? { ...xx, isActive: true }
          : { ...xx, isActive: false }
      )
    );

    const _getDataOnSell = async () => {
      const _res = await fetch(jsonData.CAR.USER_ON_SELL, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      if (_res.ok) {
        const _json = await _res.json();
        console.log(_json);
        setListOnSell(_json ? _json : []);
      }
    };

    (() => _getDataOnSell())();
  }, []);

  return (
    <>
      <SellListContainer>
        {listOnSell.map((x,i) => (
          <SellItem key={i}>
            <ShowImage src={jsonData.HOST_URL+"/"+x.showImagePath} />
            <DetailTable>
              <DetailBodyTable>
                <Tr>
                  <TdHeader>รุ่น:</TdHeader>
                  <Td>{x.series}</Td>
                </Tr>
                <Tr>
                  <TdHeader>ราคา:</TdHeader>
                  <Td>{x.price}</Td>
                </Tr>
                <Tr>
                  <TdHeader>ยีห้อ:</TdHeader>
                  <Td>{x.bran}</Td>
                </Tr>
                <Tr>
                  <TdHeader>ปี:</TdHeader>
                  <Td>{x.year}</Td>
                </Tr>
                <TrPC>
                  <TdHeader>ประเภท:</TdHeader>
                  <Td>{x.type}</Td>
                </TrPC>
                <TrPC>
                  <TdHeader>ดาวน์:</TdHeader>
                  <Td>{x.down}</Td>
                </TrPC>
                <TrPC>
                  <TdHeader>สี:</TdHeader>
                  <Td>{x.color}</Td>
                </TrPC>
                <TrPC>
                  <TdHeader>เชื้อเพลิง:</TdHeader>
                  <Td>{x.energy}</Td>
                </TrPC>
                <TrPC>
                  <TdHeader>เกียร์:</TdHeader>
                  <Td>{x.gear}</Td>
                </TrPC>
                <TrPC>
                  <TdHeader>อื่นๆ:</TdHeader>
                  <Td>{x.detail}</Td>
                </TrPC>
              </DetailBodyTable>
            </DetailTable>
            <DeleteBtn>
              <FaTimes />
            </DeleteBtn>
          </SellItem>
        ))}
      </SellListContainer>
    </>
  );
};

export default UserHomePage;
