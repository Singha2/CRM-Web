Ext.define('CrmApp.views.SearchFormPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.SearchFormPanel',
    renderTo: 'searchFormDiv',
        autoHeight: true,
        bodyPadding: 5,
		margin: '1 0 0 0',
        items   : [
			{
			xtype: 'fieldcontainer',
			msgTarget : 'side',
			layout: 'hbox',
			items: [
				{
					xtype: 'textfield',
					fieldLabel: 'Phone Number',
					name: 'searchPhoneNumber',
					allowBlank: false,
					minLength: 10,
					margin: '15 0 0 0'
				},
				{
					xtype: 'fieldset',
					title: 'Search Date',
					layout: 'hbox',
					width: 230,
					margin: '0 0 0 10',
					height: 48,
					items: [
						{
						xtype: 'radio',
						checked: true,
						boxLabel: 'Call Date',
						name: 'dateOption',
						inputValue: 'red'
					}, {
						xtype: 'radio',
						boxLabel: 'Adv, Booking Date',
						name: 'dateOption',
						inputValue: 'blue',
						margin: '0 0 0 10'
					}]
				},
				{
					xtype: 'fieldset',
					title: 'Date Range',
					layout: 'hbox',
					width: 310,
					margin: '0 0 0 10',
					height: 48,
					items: [
						{
							xtype: 'datefield',
							name: 'startDate',
							fieldLabel: 'From',
							margin: '0 5 0 0',
							allowBlank: false,
							labelWidth : 30,
							width: 140
						},
						{
							xtype: 'datefield',
							name: 'endDate',
							fieldLabel: 'To',
							allowBlank: false,
							labelWidth : 20,
							width: 140
						}
					]
				},
				{
					xtype: 'button',
					iconCls: 'searchBtn',
					text: 'Find',
					width: 60,
					margin: '15 0 0 10',
					handler: function () {
						alert('true');
					}
				}
			]
		}
	]
});