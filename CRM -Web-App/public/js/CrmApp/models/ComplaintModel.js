Ext.define('CrmApp.models.ComplaintModel', {
    extend   : 'Ext.data.Model',
    fields   : [
				{name : 'callStart' , type : 'string'},
                {name : 'callEnd' ,  type : 'string'},
                {name :'extn',type : 'string'},
                {name :'duration' , type : 'string'},
				{name :'customer', type : 'string'},
				{name : 'phoneNum', type : 'string'},
				{name : 'source', type : 'string'},
				{name : 'product', type : 'string'},
				{name : 'option', type : 'string'},
				{name : 'disposition', type : 'string'},
				{name : 'reasons', type : 'string'},
				{name : 'rep', type : 'string'},
				{name : 'team', type : 'string'},
				{name : 'subTeam', type : 'string'},
				{name : 'media', type : 'string'},
				{name : 'lang', type : 'string'},
				{name : 'transferred', type : 'string'},
				{name : 'notes', type : 'string'}
    ]
});