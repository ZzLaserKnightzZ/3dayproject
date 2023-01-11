import React, { useState, useEffect } from "react";
import {
  HomePageContainer,
  Card,
  HeaderContainer,
  DetailContainer,
  Image,
  PriceText,
  DownText,
  Series,
  ContactContainer,
  ContactTellBtn,
  ContactLineBtn,
} from "../Styled/HomePage/HomePage.styled";
import ViewDetail from "./Components/HomePage/ViewDetail";
import { FaLine, FaPhone } from "react-icons/fa";
import useNavBar from "../hooks/useNavBar";
import jsonData from "../Data/Data_URL.json";

const HomePage = () => {
  const { setNavLinks } = useNavBar();
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const [carList, setCarList] = useState([]);

  const clickCloseShowDetail = () => {
    setShowDetail((x) => !x);
    setSelectedDetail(null);
  };

  const clickShowDetail = (detail) => {
    setShowDetail((x) => !x);
    setSelectedDetail(detail);
  };

  useEffect(() => {
    setNavLinks((x) =>
      x.map((xx) =>
        xx.path === "/auth"
          ? { ...xx, isActive: true }
          : { ...xx, isActive: false }
      )
    );

    const _getAllCar = async () => {
      const _result = await fetch(jsonData.CAR.GET_All_CAR);
      try {
        setCarList(await _result.json());
      } catch (ex) {
        console.log(ex.message);
        setCarList([]);
      }
    };

    (() => _getAllCar())();
  }, []);

  return (
    <>
      <HomePageContainer>
        {carList.map((x, i) => (
          <Card key={i}>
            <HeaderContainer onClick={() => clickShowDetail(x)}>
              <Image src={jsonData.HOST_URL + "/" + x.showImagePath} />
              <DownText>ดาวน์ {x?.down}</DownText>
              <PriceText>ราคา {x?.price}</PriceText>
            </HeaderContainer>
            <DetailContainer>
              <Series>
                รุ่น :{x?.series}
                <br />
                ปี :{x?.year}
                <br />
                อื่นๆ :{x?.detail}
              </Series>
              <ContactContainer>
                <ContactTellBtn href="tel:0897239501">
                  <FaPhone />
                  &nbsp; &nbsp; โทร
                </ContactTellBtn>
                <ContactLineBtn
                  href="https://line.me/ti/p/Nmo1DJQk4x"
                  target="_blank"
                >
                  <FaLine />
                  &nbsp; &nbsp; Line
                </ContactLineBtn>
              </ContactContainer>
            </DetailContainer>
          </Card>
        ))}

        <Card>sdfdf</Card>
        <Card>sdfdf</Card>
        <Card>sdfdf</Card>
        <Card>sdfdf</Card>
        <Card>sdfdf</Card>
      </HomePageContainer>
      <ViewDetail
        showing={showDetail}
        detail={selectedDetail}
        onClose={clickCloseShowDetail}
      />
    </>
  );
};

export default HomePage;
