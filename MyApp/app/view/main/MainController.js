/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    requires: [
        'MyApp.view.CustomerWindow'
    ],

    onAddClick: function() {
        var win = Ext.create('MyApp.view.CustomerWindow', {title: 'Add Movie'});
        win.show();
    },

    onEditClick: function() {
        var win = Ext.create('MyApp.view.EditCustomerWindow', {title: 'Edit Movie'});
        // var selected = this.getView().getSelectionModel().getSelection()[0];
        // var win = Ext.create('MyApp.view.CustomerWindow', {title: 'Edit Customer', viewModel: {data: {customer: selected.getData()}}});
        win.show();
    },

    onDeleteClick: function() {
        var selected = this.getView().getSelectionModel().getSelection()[0];
        this.getView().getStore().remove(selected);
    },

    onSaveClick: function() {
        var form = this.lookupReference('form');
        if (form.isValid()) {
            var personnel = form.getValues();
            var store = Ext.getStore('personnel');
            var record = store.getById(parseInt(personnel.id)) || Ext.create('MyApp.model.Personnel');
            record.set(personnel);
            if (!store.getById(record.getId())) {
                store.add(record);
            }
            store.sync({
                success: function() {
                    form.reset();
                    form.up('window').close();
                },
                failure: function() {
                    Ext.Msg.alert('Error', 'Failed to save movie');
                }
            });
        }
    },
    // onSaveClick: function() {
    //     var form = this.lookupReference('form');
    //     if (form.isValid()) {
    //         var personnel = form.getValues();
    //         var store = Ext.getStore('personnel');
    //         if (personnel.id) {
    //             var record = store.getById(parseInt(personnel.id));
    //             record.set(personnel);
    //         } else {
    //             store.add(personnel);
    //         }
    //         store.sync();
    //         form.reset();
    //         form.up('window').close();
    //     }
    // },

    onCancelClick: function() {
        var form = this.lookupReference('form');
        form.reset();
        form.up('window').close();
    },

    onSelect: function(grid, record) {
        this.getViewModel().set('selectedCustomer', record);
    }
});

// fetch("https://localhost:44308/Movie")