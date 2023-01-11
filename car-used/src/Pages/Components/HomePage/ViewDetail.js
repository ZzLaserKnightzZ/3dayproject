import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  WrapContainer,
  ViewDetailContainer,
  Carousel,
  DetailContainer,
  CloseBtn,
  SlideBtnRight,
  SlideBtnLeft,
  ShowImage,
  DetailTable,
  ImageNumber,
  Tr,
  Td,
  TdHead,
} from "../../../Styled/HomePage/ViewDetail.styled";
import { FaTimes, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import jsonData from "../../../Data/Data_URL.json";

const CarouselImage = ({ slideImage }) => {

  const [selectImage, setSelecImage] = useState(0);

  const nextImage = () => {
    if (selectImage < slideImage?.length -1) setSelecImage((x) => x += 1);
  };

  const prevImage = () => {
    if (selectImage > 0) setSelecImage((x) => x -= 1);
  };

  useEffect(()=>{
    setSelecImage(0);
  },[slideImage]);

  return (
    <Carousel>
      <ShowImage
        src={
          jsonData.HOST_URL + "/" + (slideImage ? slideImage[selectImage].path : "")
        }
      />
      <SlideBtnLeft onClick={prevImage}>
        <FaAngleDoubleLeft />
      </SlideBtnLeft>
      <SlideBtnRight onClick={nextImage}>
        <FaAngleDoubleRight />
      </SlideBtnRight>
      <ImageNumber>
        {selectImage+1}/{slideImage?.length}
      </ImageNumber>
    </Carousel>
  );
};

const ViewDetail = ({ showing, detail, onClose }) => {
  return (
    <WrapContainer isHidden={showing}>
      <ViewDetailContainer>
        <CarouselImage slideImage={detail?.images} />
        <DetailContainer>
          <DetailTable>
            <tbody>
              <Tr>
                <TdHead>ราคา :</TdHead>
                <Td>{detail?.price} บาท</Td>
              </Tr>
              <Tr>
                <TdHead>ดาวน์ :</TdHead>
                <Td>{detail?.down} บาท</Td>
              </Tr>
              <Tr>
                <TdHead>ยี่ห้อ :</TdHead>
                <Td>{detail?.bran}</Td>
              </Tr>
              <Tr>
                <TdHead>รุ่น :</TdHead>
                <Td>{detail?.series}</Td>
              </Tr>
              <Tr>
                <TdHead>ประเภทรถ :</TdHead>
                <Td>{detail?.type}</Td>
              </Tr>
              <Tr>
                <TdHead>ปีรถ :</TdHead>
                <Td>{detail?.year}</Td>
              </Tr>
              <Tr>
                <TdHead>สี :</TdHead>
                <Td>{detail?.color}</Td>
              </Tr>
              <Tr>
                <TdHead>เชื้อเพลิง :</TdHead>
                <Td>{detail?.energy}</Td>
              </Tr>
              <Tr>
                <TdHead>เกียร์ :</TdHead>
                <Td>{detail?.gear}</Td>
              </Tr>
              <Tr>
                <TdHead>อื่นๆ :</TdHead>
                <Td>{detail?.detail}</Td>
              </Tr>
            </tbody>
          </DetailTable>
        </DetailContainer>

        <CloseBtn onClick={onClose}>
          <FaTimes />
        </CloseBtn>
      </ViewDetailContainer>
    </WrapContainer>
  );
};

ViewDetail.propTypes = {
  showing: PropTypes.bool.isRequired,
  detail: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ViewDetail;
