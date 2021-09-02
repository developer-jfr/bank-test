import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteThunk, getData } from "../../redux/actions/bank-action";
import {
  BankContainer,
  BankCard,
  BankH1,
  BankH2,
  BankIcon,
  BankP,
  BankWrapper,
  BankBtn,
  BankBtnWrap,
} from "./BankItemElemets";
import { Redirect } from "react-router-dom";
import Navbar from "../Navbar";
function Bank() {
  const bank = useSelector((state) => state.bank.bank);
  const isLogined = useSelector((state) => state.auth?.isLogined);
  console.log(isLogined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [bank]);

  if (!isLogined) {
    return <Redirect to="/auth" />;
  }

  return (
    <BankContainer>
      {bank.length !== 0 ? (
        bank.map((b) => (
          <>
          <BankWrapper key={b.id} >
            
              <BankCard>
                <BankH2>Name - {b.bankName}</BankH2>
                <BankP>Amount - {b.amount}</BankP>
              </BankCard>
            
          </BankWrapper>
          </>
        ))
      ) : (
        <div style={{ paddingTop: "100px" }}>Ho Tranzaction</div>
      )}
    </BankContainer>
  );
}

export default React.memo(Bank);
