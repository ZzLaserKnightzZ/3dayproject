export const Save = (_psKey, _psValue, _pcSuccess, _pcFail) => {
  try {
    localStorage.setItem(_psKey, _psValue);
    _pcSuccess(_psKey);
  } catch (ex) {
    _pcFail(ex.message);
  }
};

export const Read = (_psKey,  _pcSuccess, _pcFail) => {
    try {
      const data_s = localStorage.getItem(_psKey);
      if(data_s){
        _pcSuccess(data_s);
      }else{
        _pcFail("null");
      }

    } catch (ex) {
      _pcFail(ex.message);
    }
  };