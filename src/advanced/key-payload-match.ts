type INVOICE_EVENTS = {
  create: {
    amount: number
  }

  update: {
    invoiceId: number
    amount: number
  }
}

const processInvoiceEvent = <TEvent extends keyof INVOICE_EVENTS>(event: TEvent, payload: INVOICE_EVENTS[TEvent]) => {
  console.log(event, payload);
}

// So we can safely process events based in VALID_EVENTS type.
processInvoiceEvent("create", {
  amount: 10
});

// error: missing ammount property.
// processInvoiceEvent("update", {
//   invoiceId: 10
// });

// error: invalid event key
// processInvoiceEvent("send", {
//   invoiceId: 10
// });
