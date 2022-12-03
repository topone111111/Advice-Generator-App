import { useState } from "react";

const App = () => {
  const [adviceNumber, setAdviceNumber] = useState("111");
  const [advice, setAdviceContent] = useState(
    `It is easy to sit up and take notice, what's difficult is getting up and taking action.`
  );
  const [isDisabled, setDisabledStatus] = useState(false);

  const API_URL = "https://api.adviceslip.com/advice";

  const getRandomAdvice = async (x) => {
    const response = await fetch(x);

    if (response.status === 200) {
      const json = await response.json();
      const { id, advice } = json.slip;
      setAdviceNumber(id);
      setAdviceContent(advice);
    }

    toggleBtn();
  };

  const toggleBtn = () => {
    setDisabledStatus(!isDisabled);
    setTimeout(() => {
      setDisabledStatus(!!isDisabled);
    }, 2000);
  };

  return (
    <div className="advice">
      <div className="advice__number">ADVICE {`#${adviceNumber}`}</div>
      <div className="advice__text">{`“ ${advice} ”`}</div>
      <div className="advice__separator">
        <div className="line"></div>
        <img src="../src/assets/qts.svg" alt="quotes" />
        <div className="line"></div>
      </div>
      <button
        disabled={isDisabled}
        type="button"
        className="advice__cta"
        onClick={() => getRandomAdvice(API_URL)}
      >
        <img src="../src/assets/logo.svg" alt="logo" />
      </button>
    </div>
  );
};

export default App;
