Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { id: 1 , title: 'The Dark Knight', genre: "Action" },
        { id: 2 , title: 'The Lord of the Rings: The Fellowship of the Ring', genre: "Fantasy" },
        { id: 3 , title: 'Naruto Shippuden', genre: "Fantasy" },
        { id: 4 , title: 'Kimetsu No Yaiba', genre: "Fantasy" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
