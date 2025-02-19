import { e as ensure_array_like, c as pop, d as stringify, p as push } from "../../chunks/index.js";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from "chart.js";
import "socket.io-client";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);
  let historicalData = [];
  const each_array = ensure_array_like(historicalData);
  $$payload.out += `<div class="container svelte-fijjmm"><img src="https://bi.tettnang.de/bi/config/layout/tettnang/logo.png" alt="Logo Gemeinde Tettnang" class="logo svelte-fijjmm"> <h1 class="svelte-fijjmm">Live-Sensordaten</h1> <p>Verfolgen Sie in Echtzeit die Messwerte für Höhe, Temperatur, Luftfeuchtigkeit und Luftdruck. Die Daten werden alle 10 Sekunden automatisch aktualisiert, um stets aktuelle Informationen zu bieten.</p> <div${attr("class", `status svelte-fijjmm ${stringify([
    "",
    "offline"
  ].filter(Boolean).join(" "))}`)}>${escape_html("Offline")}</div> <div class="chart-container svelte-fijjmm"><canvas id="heightChart"></canvas></div> <div class="chart-container svelte-fijjmm"><canvas id="tempChart"></canvas></div> <div class="chart-container svelte-fijjmm"><canvas id="humidityChart"></canvas></div> <div class="chart-container svelte-fijjmm"><canvas id="pressureChart"></canvas></div> <button class="toggle-button svelte-fijjmm">${escape_html("Zeige")} Historie</button> <div${attr("class", `history-panel ${stringify("")} svelte-fijjmm`)}><table class="history-table svelte-fijjmm"><thead><tr class="svelte-fijjmm"><th class="svelte-fijjmm">Zeitstempel</th><th class="svelte-fijjmm">Höhe (m)</th><th class="svelte-fijjmm">Temperatur (°C)</th><th class="svelte-fijjmm">Luftfeuchtigkeit (%)</th><th class="svelte-fijjmm">Luftdruck (hPa)</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let entry = each_array[$$index];
    $$payload.out += `<tr class="svelte-fijjmm"><td class="svelte-fijjmm">${escape_html(new Date(entry.zeitstempel).toLocaleString())}</td><td class="svelte-fijjmm">${escape_html(entry.hoehe)}</td><td class="svelte-fijjmm">${escape_html(entry.temperatur)}</td><td class="svelte-fijjmm">${escape_html(entry.luftfeuchtigkeit)}</td><td class="svelte-fijjmm">${escape_html(entry.luftdruck)}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div> <div class="footer svelte-fijjmm"><p>© 2025 Gemeinde Tettnang. Alle Rechte vorbehalten. <a href="https://www.tettnang.de" class="svelte-fijjmm">Mehr erfahren</a></p></div></div>`;
  pop();
}
export {
  _page as default
};
