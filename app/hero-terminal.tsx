'use client';

import { Terminal } from '../components/ui/terminal';

const terminalLines = [
  '$ curl -X GET https://api.payments.dev/health',
  '200 OK  { "status": "healthy", "uptime": "99.98%" }',
  '',
  '$ curl -X POST https://api.payments.dev/transactions \\',
  '  -H "Content-Type: application/json" \\',
  '  -d \'{"amount": 12500, "currency": "USD"}\'',
  '202 Accepted  { "id": "txn_8f3k2", "status": "processing" }',
];

export function HeroTerminal() {
  return <Terminal lines={terminalLines} title="~/api-preview" />;
}
