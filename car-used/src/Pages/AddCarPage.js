import React, { useRef, useState, useEffect } from "react";
import {
  AddCarContainer,
  BoxWraper,
  Title,
  InputText,
  SubmitBtn,
  FileSelecterBtn,
  WrapImage,
} from "../Styled/AddCarPage/AddCarPage.styled";
import useAuth from "../hooks/useAuth";
import useNavBar from "../hooks/useNavBar";
import jsonData from "../Data/Data_URL.json";

const AddCarPage = (props) => {
  const { auth } = useAuth();
  const { setNavLinks } = useNavBar();

  const showFileRef = useRef(null);
  const showAllFileRef = useRef(null);

  const [showImage, setShowImage] = useState("");
  const [allImage, setAllImage] = useState([]);

  const [showImageData, setShowImageData] = useState(null);
  const [allImageData, setAllImageData] = useState([]);
  const [price, setPrice] = useState("");
  const [down, setDown] = useState("");
  const [bran, setBran] = useState("");
  const [series, setSeries] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [energy, setEnergy] = useState("");
  const [gear, setGear] = useState("");
  const [detail, setDetail] = useState("");

  const getImageURL_sb64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const selecShowImage = async (e) => {
    if (e.target.files.length === 0) return;
    const _file = e.target.files[0];
    setShowImageData(_file);
    const _base64 = await getImageURL_sb64(_file);
    setShowImage(_base64);
  };

  const selecAllImage = (e) => {
    const _files = e.target.files;
    if (_files.length === 0) return;
    setAllImageData(_files);
    setAllImage([]); //reset image
    const _files_ao = [].slice.call(_files);
    _files_ao.forEach(async (e) => {
      const _base64_s = await getImageURL_sb64(e);
      setAllImage((x) => [...x, _base64_s]);
    });
  };

  const clickSubmit = async () => {
    //no validate
    let addCarModel = new FormData();

    Array.from(allImageData).forEach((x) => addCarModel.append("images", x));
    addCarModel.append("showImagePath", showImageData);
    addCarModel.append("price", parseInt(price));
    addCarModel.append("down", parseInt(down));
    addCarModel.append("bran", bran);
    addCarModel.append("series", series);
    addCarModel.append("type", type);
    addCarModel.append("year", parseInt(year));
    addCarModel.append("color", color);
    addCarModel.append("energy", energy);
    addCarModel.append("gear", gear);
    addCarModel.append("detail", detail);

    const req = (theUrl, accessToken, data, callback) => {
      console.log(accessToken);
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
          callback(JSON.parse(this.responseText));
      };
      xmlHttp.open("POST", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader("Authorization", "Bearer " + accessToken);
      xmlHttp.send(data);
    };

    req(jsonData.CAR.ADD_CAR, auth?.token, addCarModel, (_po) => {
      console.log("added car:"+_po);
      alert("ADDED :"+_po.series);
    });

    /*
    const request = new XMLHttpRequest();
    request.setRequestHeader('Authorization',`Bearer ${auth?.token}`);
    request.open("POST", jsonData.CAR.ADDCAR);
    request.onreadystatechange = function () {
      if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
      }
    }
    request.send(addCarModel);
*/
    /*
    const _response = await fetch(jsonData.CAR.ADDCAR, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });

    console.log(await _response.json());
*/
    /*
    const _result = await fetch(jsonData.CAR.ADDCAR, {
      method:"POST",
      mode: "cors",
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json', 
        Authorization: `Bearer ${auth?.token}`,
      },
      body: addCarModel ,
    });

    if (_result.ok) {
      console.log(await _result.json());
      alert("ok");
    } else {
      console.log(_result);
      alert("fail");
    }
    */
  };

  useEffect(() => {
    setNavLinks((x) =>
      x.map((xx) =>
        xx.path === "/auth/AddCar"
          ? { ...xx, isActive: true }
          : { ...xx, isActive: false }
      )
    );
  }, []);

  return (
    <>
      <AddCarContainer>
        <BoxWraper>
          <Title>รูปหน้าปก</Title> &nbsp;
          <FileSelecterBtn onClick={() => showFileRef.current.click()}>
            เลือกรูป
          </FileSelecterBtn>
          <WrapImage>
            {showImage.length > 0 ? (
              <img
                style={{ width: "200px", height: "200px" }}
                src={showImage}
              />
            ) : (
              <></>
            )}
          </WrapImage>
          <input
            type={"file"}
            ref={showFileRef}
            style={{ display: "none" }}
            accept={"image/*"}
            multiple={false}
            onChange={selecShowImage}
          />
        </BoxWraper>
        <BoxWraper>
          <Title>รูปเพิ่มเติม</Title> &nbsp;
          <FileSelecterBtn onClick={() => showAllFileRef.current.click()}>
            เลือกรูป
          </FileSelecterBtn>
          <input
            type={"file"}
            ref={showAllFileRef}
            style={{ display: "none" }}
            accept={"image/*"}
            multiple={true}
            onChange={selecAllImage}
          />
          <WrapImage>
            {/*no detlete option */}
            {allImage.map((x, i) => (
              <img
                key={i}
                style={{ width: "100px", height: "100px", margin: "5px" }}
                src={x}
              />
            ))}
          </WrapImage>
        </BoxWraper>
        <BoxWraper>
          <Title>ราคา</Title>
          <InputText value={price} onChange={(e) => setPrice(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>ดาวน์</Title>
          <InputText value={down} onChange={(e) => setDown(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>ยีห้อ</Title>
          <InputText value={bran} onChange={(e) => setBran(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>รุ่น</Title>
          <InputText
            value={series}
            onChange={(e) => setSeries(e.target.value)}
          />
        </BoxWraper>
        <BoxWraper>
          <Title>ประเภท</Title> {/*option */}
          <InputText value={type} onChange={(e) => setType(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>ปีรถ</Title>
          {/*option */}
          <InputText value={year} onChange={(e) => setYear(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>สี</Title>
          <InputText value={color} onChange={(e) => setColor(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>เชื้อเพลิง</Title>
          {/*option */}
          <InputText
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
          />
        </BoxWraper>
        <BoxWraper>
          <Title>เกียร์</Title>
          {/*option */}
          <InputText value={gear} onChange={(e) => setGear(e.target.value)} />
        </BoxWraper>
        <BoxWraper>
          <Title>ข้อมูลเพิ่มเติม</Title>
          <InputText
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </BoxWraper>
      </AddCarContainer>
      <br />
      <br />
      <br />
      <center>
        <SubmitBtn onClick={clickSubmit}>เพิ่ม</SubmitBtn>
      </center>
      <br />
      <br />
      <br />
    </>
  );
};

export default AddCarPage;
