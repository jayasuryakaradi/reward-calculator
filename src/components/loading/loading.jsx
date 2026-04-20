import { UI_LABELS } from "../../constants";

import "./loading.css";

const Loading = () => {
  return (
    <main className="loading">
      <h2>{UI_LABELS.LOADING_TEXT}</h2>
    </main>
  );
};

export default Loading;
