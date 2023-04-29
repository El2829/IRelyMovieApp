Ext.define('MyApp.view.EditCustomerWindow', {
    extend: 'Ext.window.Window',
    xtype: 'customerwindow',
    title: 'Edit Movie',
    modal: true,
    width: 400,
    viewModel: {
        data: {
            customer: null
        }
    },
    items: [
        {
            xtype: 'form',
            reference: 'form',
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                labelWidth: 50,
                padding: 10
            },
            items: [
                {xtype: 'hiddenfield', name: 'id', bind: '{personnel.id}'},
                {xtype: 'textfield', name: 'title', fieldLabel: 'Title', bind: '{personnel.title}'},
                {xtype: 'textfield', name: 'genre', fieldLabel: 'Genre', bind: '{personnel.genre}'}
            ]
        }
    ],
    buttons: [
        {text: 'Save', handler: 'onSaveClick'},
        {text: 'Cancel', handler: 'onCancelClick'}
    ]
});
