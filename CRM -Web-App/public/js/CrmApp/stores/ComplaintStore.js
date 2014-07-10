Ext.define('CrmApp.stores.ComplaintStore', {
    extend    : 'Ext.data.Store',
    //singleton : true,
	autoLoad: true,
    requires  : ['CrmApp.models.ComplaintModel'],
    model     : 'CrmApp.models.ComplaintModel',
     proxy: {
			type: 'memory',
			data:data,
			reader: {
                    type: 'array'
                }
	 }
}); 

var data = [
[
                '12/21/34',
                '12/21/34',
                '53467',
               '30',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				''
            ]
];