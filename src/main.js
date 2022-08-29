import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPencil,
  faTrash,
  faPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import BasicCard from "./components/UI/BasicCard.vue";

const app = createApp(App);

library.add(faPencil, faTrash, faPlus, faClose);

app.component("basic-card", BasicCard);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
