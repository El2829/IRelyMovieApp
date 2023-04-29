/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    minHeight: 500,
    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Movie',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Title',  dataIndex: 'title', flex: 1  },
        { text: 'Genre', dataIndex: 'genre', flex: 1 },
        {
            text: 'Delete',
            width: 70,
            align: 'center',
            renderer: function (value, metaData, record, rowIndex) {
                var id = Ext.id(); // generate unique id for an element
                Ext.defer(function () {
                    Ext.widget('button', {
                        renderTo: Ext.query("#" + id)[0],
                        iconCls: 'x-fa fa-trash',
                        cls: 'deleteButton', // add the 'red' class 
                        style: 'background-color: red; border-color: red;',
                        handler: 'onDeleteClick'
                    });
                }, 50);
                return Ext.String.format('<div id="{0}" class="deleteButtonContainer"></div>', id);
            }
        },
        {
            text: 'Edit',
            width: 70,
            align: 'center',
            renderer: function (value, metaData, record, rowIndex) {
                var id = Ext.id(); // generate unique id for an element
                Ext.defer(function () {
                    Ext.widget('button', {
                        renderTo: Ext.query("#" + id)[0],
                        iconCls: 'x-fa fa-edit',
                        cls: 'editButton',
                        handler: 'onEditClick'
                    });
                }, 50);
                return Ext.String.format('<div id="{0}" class="editButtonContainer"></div>', id);
            }
        }
    ],

    tbar: [
        {
            xtype: 'textfield',
            emptyText: 'Search',
            width: 300
        },
        {
            text: 'Add',
            handler: 'onAddClick',
            iconCls: 'x-fa fa-plus-circle',
            cls: 'addButton',
            style: 'background-color: #5FA2DD; border-color: #5FA2DD;',
        }
    ],
});
