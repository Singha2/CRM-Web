Ext.define('CrmApp.views.CallFormPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.CallFormPanel',
    renderTo: 'callFormDiv',
	autoHeight: true,
	width   : 215,
	bodyPadding: 5,
	margin: '8 0 0 0',
	items   : [{
		xtype: 'fieldcontainer',
		msgTarget : 'side',
		layout: 'hbox',
		items: [
			{
				xtype: 'textfield',
				name: 'phoneNumber',
				allowBlank: false,
				minLength: 10,
				maxLength: 10,
				width: 120,
			},
			{
				xtype: 'button',
				iconCls: 'phoneCall',
				text: 'Call',
				formBind: true,
				disabled: true,
				width: 60,
				margin: '0 0 0 10',
				handler: function () {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						showNewCallPopup();
						var formValues = form.getValues();
						iosocket.emit('OUTBOUNDCALL', formValues.phoneNumber);
					}
				}
			}
		]
	}]
});