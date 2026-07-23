import { ref } from 'vue';

const initialLines = [
  { type: 'system', text: 'MEI PORTFOLIO OS · session ready' },
  { type: 'output', text: "Welcome to Mei's Portfolio Shell." },
  { type: 'muted', text: 'Type `help` to list commands, or `open about` to browse.' },
  { type: 'muted', text: 'Shortcuts: 1 about · 2 skills · 3 projects · 4 contact' },
  { type: 'blank', text: ' ' }
];

/** Shared across route remounts so history survives page switches. */
export const terminalLines = ref([...initialLines]);
export const terminalHistory = ref([]);
export const terminalScrollTop = ref(0);

export function resetTerminalSession() {
  terminalLines.value = [...initialLines];
  terminalHistory.value = [];
  terminalScrollTop.value = 0;
}
