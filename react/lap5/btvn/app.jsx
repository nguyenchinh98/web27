import { Prompt } from "react-router-dom";
<Prompt
  when={true} // true | false
  message={(location) => `Ban chac chan muon di den ${location.pathname}`}
/>;
