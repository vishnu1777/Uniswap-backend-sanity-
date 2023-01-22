export default {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'transaction',
      title: 'Transactions',
      type: 'array',
      of: [{name: 'transactionReferred', type: 'reference', to: [{type: 'transactions'}]}],
    },
  ],
}
