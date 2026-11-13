# Screenshots

Presentation-ready captures of the Pharmacy Management System, taken from the running
application with a seeded demo dataset (14 medicines, 4 staff accounts, 9 invoices).

Regenerate them with the capture tool described in `../../UI_GUIDE.md`; every image is
1600 × 950 unless noted.

| File                              | Screen                        | What it shows                                                                                   |
| --------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------- |
| `01-login.png`                    | Sign in                       | Centred card, brand block, password reveal, demo credentials hint                               |
| `03-admin-overview.png`           | Admin ▸ Overview              | KPI cards (units in stock, low stock, expiry alerts, today's sales) + expiry and invoice panels |
| `04-admin-invoices.png`           | Admin ▸ Invoices              | Filter toolbar, invoice list and the selected invoice's line items and total                    |
| `05-admin-users.png`              | Admin ▸ Users                 | Staff list with role, contact details and status badges                                         |
| `06-admin-add-user.png`           | Admin ▸ Users ▸ Add user      | Modal form with grouped sections and inline field validation                                    |
| `07-admin-profile.png`            | Admin ▸ Profile               | Editable profile, read-only username, role selector                                             |
| `08-pharmacist-overview.png`      | Pharmacist ▸ Overview         | The same overview in the pharmacist shell                                                       |
| `09-pharmacist-inventory.png`     | Pharmacist ▸ Inventory        | Stock list with expiry/status badges, archive and edit actions                                  |
| `10-pharmacist-validity.png`      | Pharmacist ▸ Validity         | Expiry report with filter chips and Excel export                                                |
| `11-pharmacist-sell.png`          | Pharmacist ▸ Sell             | Medicine picker, cart with three lines and the sale total                                       |
| `12-pharmacist-add-medicine.png`  | Pharmacist ▸ Inventory ▸ Add  | Modal form for a new medicine                                                                   |
| `13-pharmacist-edit-medicine.png` | Pharmacist ▸ Inventory ▸ Edit | Price update with the resulting stock preview                                                   |
| `14-confirm-dialog.png`           | Confirmation                  | Styled destructive-action confirmation                                                          |
| `15-responsive-drawer.png`        | 1000 × 780                    | Narrow window: sidebar collapsed into an overlay drawer                                         |
| `16-toast-notification.png`       | Toast                         | Non-blocking success notification (transparent PNG)                                             |

## Captions that work well for slides

- **One shell for every role** — the same navy sidebar, header and spacing on admin and
  pharmacist screens.
- **Responsive by design** — below 1180 px the sidebar becomes a drawer, lists stack and
  toolbars reflow.
- **Feedback without interruptions** — inline errors and toasts replace message boxes.
- **Data you can scan** — status badges, currency/date formatting and per-screen summaries.
