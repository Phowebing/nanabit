import styled from "@emotion/styled";

export const PaymentWrap = styled.div`
  margin: 0 auto;

  hr {
    border: none;
    background-color: #e9b25f;
    height: 1px;
    margin-bottom: 30px;
  }
  .paymentListTitle {
    font-size: 25px;
    color: #e9b25f;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 20px;
  }
`;
export const PaymentBody = styled.div`
  width: 1110px;
  margin: 0 auto;
`;
export const PaymentHeader = styled.div`
  p {
    font-size: 70px;
    color: #e9b25f;
    margin-top: 80px;
    margin-bottom: 50px;
    text-align: center;
    font-weight: 500;
  }
`;

export const PaymentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 60px;
  font-size: 15px;
`;

export const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .bankTransfer {
    border: 1px solid #d9d9d9;
    background-color: #f6f6f6;
    width: 550px;
    height: 206px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    img {
      width: 130px;
    }
    p {
      font-size: 35px;
      color: #868686;
    }
  }
  .creditCard {
    border: 1px solid #d9d9d9;
    background-color: #f6f6f6;
    width: 550px;
    height: 206px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    img {
      width: 130px;
    }
    p {
      font-size: 35px;
      color: #868686;
    }
  }
`;

export const PostNum = styled.div`
  display: flex;
  line-height: 40px;
  margin-bottom: 7px;

  p {
    font-size: 18px;
    color: #575757;
    margin-right: 20px;
  }
  .postNumDiv {
    width: 150px;
    height: 40px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border: #d9d9d9 1px solid;
    margin-right: 10px;
  }
  i {
    font-size: 15px;
    color: #575757;
    font-style: normal;
  }
`;
export const Detailadress = styled.div`
  div {
    width: 100%;
    border: 1px solid #d9d9d9;
    height: 40px;
    margin-bottom: 7px;
  }
  p {
    font-size: 15px;
    line-height: 40px;
    color: #575757;
    margin-left: 10px;
  }
`;

export const Selectadress = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 0;
  .adressTextDiv {
    border: 1px solid #d9d9d9;
    height: 40px;
    width: 1500px;
    display: table-cell;
    vertical-align: middle;

    p {
      font-size: 15px;
      margin-left: 10px;
      color: #575757;
    }
  }
  .custom-radio span.ant-radio + * {
    padding-inline-end: 0;
  }
`;