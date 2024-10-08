import { createApp } from 'vue'
import AlertComponent from './17-global-component/components/AlertComponent.vue';
import './index.css';
import App from './18-tailwind-css/App.vue';

const app = createApp(App);

app.provide('message', 'Good Morning');
app.component("alert-hello", AlertComponent);
app.mount('#app');
